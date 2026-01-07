import { CartItem } from "@/context/CartContext"

const WHATSAPP_NUMBER = "+22963656925"

export function generateWhatsAppLink(items: CartItem[], total: number) {
    const formatPrice = (p: number) => {
        return new Intl.NumberFormat('fr-BJ', {
            style: 'currency',
            currency: 'XOF',
            maximumFractionDigits: 0
        }).format(p)
    }

    let message = `*COMMANDE MELEK CLOTHING*\n\n`
    message += `Bonjour, je souhaite passer la commande suivante :\n\n`

    items.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`
        message += `   Taille : ${item.size}\n`
        message += `   Quantité : ${item.quantity}\n`
        message += `   Prix : ${formatPrice(item.price)}\n`
        message += `   Lien image : ${item.image_url}\n\n`
    })

    message += `--------------------------\n`
    message += `*TOTAL : ${formatPrice(total)}*\n`
    message += `--------------------------\n\n`
    message += `Merci de me confirmer la disponibilité et les modalités de livraison.`

    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodedMessage}`
}
