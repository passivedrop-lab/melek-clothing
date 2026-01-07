-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table for product categories
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table for products
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    image_url TEXT, -- Primary image
    gallery_urls TEXT[], -- Secondary images
    sizes TEXT[] DEFAULT '{}', -- Array of available sizes (e.g., ['S', 'M', 'L'])
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Table for admin activity logs
CREATE TABLE IF NOT EXISTS public.activity_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    admin_id UUID NOT NULL, -- References auth.users
    action TEXT NOT NULL, -- e.g., 'ADD_PRODUCT', 'UPDATE_PRODUCT', 'DELETE_PRODUCT'
    target_id UUID, -- The ID of the affected item (product or category)
    details JSONB, -- Additional info
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- Public READ access for categories and products
CREATE POLICY "Allow public read categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow public read products" ON public.products FOR SELECT USING (true);

-- Admin WRITE access (Requires authentication)
CREATE POLICY "Allow authenticated insert categories" ON public.categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update categories" ON public.categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete categories" ON public.categories FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert products" ON public.products FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated update products" ON public.products FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated delete products" ON public.products FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated view logs" ON public.activity_logs FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated insert logs" ON public.activity_logs FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Function to handle updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER tr_products_updated_at
    BEFORE UPDATE ON public.products
    FOR EACH ROW
    EXECUTE PROCEDURE handle_updated_at();

-- Insert default categories
INSERT INTO public.categories (name, slug) VALUES
('Homme', 'homme'),
('Femme', 'femme'),
('Accessoires', 'accessoires'),
('Pantalons', 'pantalons'),
('Jeans', 'jeans')
ON CONFLICT (name) DO NOTHING;
