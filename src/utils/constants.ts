export const BUSINESS_INFO = {
  name: 'Marathwada Tiles',
  contactPerson: 'Aaman Lakhani',
  phoneDisplay: '+91 88882 44441',
  phoneTel: '+918888244441',
  whatsappNumber: '918888244441',
  email: 'info@marathwadatiles.com',
  address: {
    street: 'Ranchoddas Girni, Rengtipura',
    landmark: 'Opposite Jincy Police Station',
    city: 'Aurangabad',
    state: 'Maharashtra',
    pincode: '431001',
    country: 'India',
    full: 'Ranchoddas Girni, Rengtipura, Opposite Jincy Police Station, Aurangabad, Maharashtra 431001, India.'
  },
  primaryMarket: 'Aurangabad and surrounding regions, Maharashtra',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ranchoddas+Girni+Rengtipura+Opposite+Jincy+Police+Station+Aurangabad+Maharashtra+431001'
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Hello Marathwada Tiles, I would like to enquire about your tile collection.';
  const encodedText = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedText}`;
}

export function getProductWhatsAppUrl(productName: string, size?: string, finish?: string): string {
  const detailStr = size && finish ? ` (${size}, ${finish})` : '';
  const msg = `Hello Marathwada Tiles, I am interested in ${productName}${detailStr}. Could you share more details and pricing for my project?`;
  return getWhatsAppUrl(msg);
}
