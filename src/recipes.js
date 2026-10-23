// Recetario Velázquez — Static recipe data
// Nayarit, México

import imgEnchiladas from './assets/enchiladas-suizas.png'
import imgPescado    from './assets/pescado-zarandeado-nayarita.png'

export const recipes = [
  {
    id: 'enchiladas-suizas',
    num: 1,
    image: imgEnchiladas,
    imageAlt: 'Enchiladas Suizas: tortillas con salsa verde, queso Oaxaca fundido y crema',
    title: 'Enchiladas Suizas',
    subtitle: 'Tortillas bañadas en salsa verde con crema y queso fundido',
    origin: 'Platillo principal · Nayarit',
    time: '45 min',
    servings: '4 porciones',
    difficulty: 'Media',
    description:
      'Un platillo que celebra la versatilidad de la cocina mexicana: tortillas de maíz suaves, salsa verde de tomatillo con un toque de crema ácida, y la generosidad del queso Oaxaca derretido. Aunque el nombre evoca lo suizo, el corazón es puramente nayarita.',
    ingredients: [
      { name: 'Tortillas de maíz', qty: '12 piezas' },
      { name: 'Tomatillos (tomate verde)', qty: '500 g' },
      { name: 'Chile serrano', qty: '2 piezas' },
      { name: 'Cilantro fresco', qty: '½ taza' },
      { name: 'Ajo', qty: '2 dientes' },
      { name: 'Cebolla blanca', qty: '½ pieza' },
      { name: 'Crema ácida', qty: '200 ml' },
      { name: 'Queso Oaxaca rallado', qty: '200 g' },
      { name: 'Pechuga de pollo cocida y deshebrada', qty: '300 g' },
      { name: 'Aceite vegetal', qty: '3 cdas' },
      { name: 'Sal y pimienta', qty: 'al gusto' },
    ],
    steps: [
      {
        num: 1,
        text: 'Cuece los tomatillos, el chile serrano, el ajo y la cebolla en agua hirviendo durante 10 minutos hasta que estén suaves.',
      },
      {
        num: 2,
        text: 'Licúa los ingredientes cocidos con el cilantro y sazona con sal. Reserva la salsa verde.',
      },
      {
        num: 3,
        text: 'En un sartén con aceite caliente, sofríe la salsa verde 3-4 minutos a fuego medio hasta que espese ligeramente. Incorpora la crema ácida y mezcla bien. Retira del fuego.',
      },
      {
        num: 4,
        text: 'Pasa las tortillas rápidamente por aceite caliente para suavizarlas (15 segundos por lado). Escúrrelas sobre papel absorbente.',
      },
      {
        num: 5,
        text: 'Rellena cada tortilla con pollo deshebrado, enróllalas y colócalas en un refractario engrasado con las uniones hacia abajo.',
      },
      {
        num: 6,
        text: 'Baña las enchiladas con la salsa verde, cubre con queso Oaxaca rallado y hornea a 180 °C por 15 minutos hasta que el queso se dore.',
      },
      {
        num: 7,
        text: 'Sirve inmediatamente. Acompaña con crema adicional, rodajas de cebolla morada y cilantro fresco.',
      },
    ],
  },
  {
    id: 'pescado-zarandeado',
    num: 2,
    image: imgPescado,
    imageAlt: 'Pescado Zarandeado Nayarita: pargo rojo abierto en mariposa asado a las brasas en zaranda con adobo de salsa Huichol',
    title: 'Pescado Zarandeado Nayarita',
    subtitle: 'Pescado entero a las brasas de mangle marinado con adobo de la costa',
    origin: 'Platillo de costa · Nayarit',
    time: '50 min',
    servings: '4 porciones',
    difficulty: 'Media',
    description:
      'El plato emblema de la costa nayarita, originario de la mística isla de Mexcaltitán. Un pargo o huachinango abierto en mariposa, barnizado generosamente con un menjurje de salsa Huichol tradicional, mayonesa, mostaza y ajo, cocinado pacientemente al calor de las brasas sobre una prensa zarandeadora.',
    ingredients: [
      { name: 'Pargo rojo o huachinango entero (abierto en mariposa)', qty: '1.5 kg' },
      { name: 'Salsa Huichol tradicional', qty: '4 cdas' },
      { name: 'Mayonesa', qty: '3 cdas' },
      { name: 'Mostaza amarilla', qty: '2 cdas' },
      { name: 'Salsa inglesa', qty: '1 cda' },
      { name: 'Salsa de soya', qty: '1 cda' },
      { name: 'Mantequilla derretida', qty: '50 g' },
      { name: 'Ajo finamente picado', qty: '4 dientes' },
      { name: 'Jugo de limón agrio', qty: '3 piezas' },
      { name: 'Orégano seco molido', qty: '1 cdita' },
      { name: 'Cebolla morada en rodajas', qty: '1 pieza' },
      { name: 'Jitomate en rodajas', qty: '1 pieza' },
      { name: 'Chile serrano en tiras', qty: '2 piezas' },
      { name: 'Sal y pimienta negra', qty: 'al gusto' },
    ],
    steps: [
      {
        num: 1,
        text: 'Lava y seca muy bien el pescado abierto en mariposa. Salpimienta ambos lados al gusto y rocía con el jugo de dos limones. Deja reposar durante 10 minutos.',
      },
      {
        num: 2,
        text: 'En un tazón prepara el menjurje mezclando la mantequilla derretida, mayonesa, mostaza, salsa Huichol, salsa inglesa, salsa de soya, ajo picado y orégano seco hasta obtener una emulsión espesa.',
      },
      {
        num: 3,
        text: 'Barniza abundantemente el pescado por el lado de la carne con el adobo preparado. Acomoda encima las rodajas de cebolla morada, jitomate y las tiras de chile serrano.',
      },
      {
        num: 4,
        text: 'Engrasa la prensa zarandeadora metálica con un poco de mantequilla o aceite y acomoda el pescado dentro, sujetándolo firmemente.',
      },
      {
        num: 5,
        text: 'Coloca la zaranda sobre brasas de carbón o leña a fuego medio-bajo, con la piel hacia abajo en dirección al calor. Cocina durante 20 a 25 minutos.',
      },
      {
        num: 6,
        text: 'Gira la zaranda para dorar la carne y caramelizar las verduras directamente hacia las brasas durante 10 a 12 minutos más, cuidando que quede tierno y bien jugoso.',
      },
      {
        num: 7,
        text: 'Retira de las brasas y sirve recién salido sobre la zaranda. Acompaña con tortillas de maíz calientes, frijoles puercos, salsa mexicana y cuartos de limón.',
      },
    ],
  },
]
