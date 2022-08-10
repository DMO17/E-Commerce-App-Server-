const products = [
  {
    title: "SUPER SKINNY DISTRESSED PAINT SPLAT JEANS",
    description:
      "Covering that grey area between smart and casual, jeans are always a solid option when it comes to men's outfits. Jeans are the ultimate staple in every guy's fashion line-up, and they go with just about anything to create a go-to look. Our range of mens jeans gives you the chance to elevate your daily outfit. Whether you prefer skinny denim or you rate a loose fit more, make sure you secure your denim selects here. Dress them down with a hoodie and white trainers, or dress them up with a blazer and slip-ons",
    img: "https://i1.adis.ws/i/boohooamplience/amm12613_washed%20black_xl/washed-black-super-skinny-distressed-paint-splat-jeans?$product_image_main_thumbnail_tablet$&fmt=webp",
    type: "Men",
    color: "Black",
    price: 19.65,
  },
  {
    title: "SHORT SLEEVE REVERE TEXTURED SHIRT",
    description:
      "Introduce some subtle dapperness into your day-to-day lineup with a shirt. You'll be surprised at how easy it is to throw together a sophisticated ensemble with a plain shirt from our extensive range. If you want to look sharp by keeping it simple, pair a checked shirt with a blazer and skinny jeans. Finish off with Chelsea boots for an outfit that delivers dapperness from the office to the bar. If you are looking for the ultimate summer outfit, our selection of printed shirts will make sure you'll get noticed.",
    img: "https://i1.adis.ws/i/boohooamplience/bmm19655_khaki_xl/khaki-short-sleeve-revere-textured-shirt?$product_image_main_thumbnail_tablet$&fmt=webp",
    type: "Men",
    color: "Grey",
    price: 17.55,
  },
  {
    title: "OVERSIZED MAN REPEAT PRINT HOODIE",
    description:
      "This garment is READY FOR THE FUTURE. It is made with recycled polyester. 50% Recycled Polyester And 50% Cotton, Model Is 6'1 And Wears Size M",
    img: "https://i1.adis.ws/i/boohooamplience/bmm14635_ecru_xl/ecru-oversized-man-repeat-print-hoodie?$product_image_main_thumbnail$&fmt=webp",
    type: "Men",
    color: "White",
    price: 16.85,
  },
  {
    title: "OVERSIZED MAN GRAFFITI SWEATSHIRT TRACKSUIT",
    description:
      "a loose, warm set of clothes consisting of a sweatshirt and trousers with an elasticated or drawstring waist, worn when exercising or as casual wear. 70% Cotton And 30% Polyester, Model Is 6'1' And Wears Size M",
    img: "https://i1.adis.ws/i/boohooamplience/mzz04034_black_xl/black-oversized-man-graffiti-sweatshirt-tracksuit?$product_image_main_thumbnail_tablet$&fmt=webp",
    type: "Men",
    color: "Black",
    price: 31.54,
    inStock: false,
  },
  {
    title: "Berghaus Colour Block Padded Jacket Children",
    description:
      "Keep your kiddo cosy in this children's Colour Block Padded Jacket from Berghaus. Comin' in a black and grey colour block design, this standard-fit jacket is made with super-smooth, durable poly fabric for lasting wear. Exclusive to JD, it features a full-zip closure and a fixed hood to amp up the coverage. It has long sleeves with a stretchy binding at the cuffs to secure them in place, while zippered front pockets deliver essential storage. With a plush padded insulation, it's finished up with classic Berghaus branding at the chest.",
    img: "https://i8.amplience.net/i/jpl/jd_561001_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    type: "Kids",
    color: "Black",
    price: 65.34,
  },
  {
    title: "Nike Multi Swoosh T-Shirt",
    description:
      "Step up your essentials with this juniors' Multi Swoosh T-Shirt from Nike. In a Navy colourway, this tee is cut from light, breathable cotton for everyday comfort. It comes in a standard fit and features short sleeves with a ribbed crew neckline for a little added stretch. Finished up with Swoosh branding to the chest. Machine washable.",
    img: "https://i8.amplience.net/i/jpl/jd_554891_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    type: "Kids",
    color: "Purple",
    price: 23.55,
  },
  {
    title: "Jordan Essential Full Zip Hooded Tracksuit Children",
    description:
      "Suit 'em up in iconic style with this children's Essential Full Zip Hooded Tracksuit from Jordan. In a red and black colourway, this standard fit suit is cut from soft, fleecey fabric for everyday comfort. It features a full-zip fastening and fixed hood for custom coverage, with ribbed trims to lock in the fit. It has side pockets for their essentials, while the joggers come with an elasticated waistband for a relaxed wear. Finished up with signature Jumpman branding to the chest and leg. Machine washable.",
    img: "https://i8.amplience.net/i/jpl/jd_549149_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    type: "Kids",
    color: "Red",
    price: 48.51,
  },
  {
    title: "Hoodrich Azure Overhead Hoodie",
    description:
      "Upgrade your comfort with this women's Azure Overhead Hoodie from Hoodrich. This oversized hoodie is made from a cotton poly blend that's ultra-soft and breathable for relaxed wear. It features an adjustable hood for custom coverage, ribbed trims for a snug feel and a kangaroo pocket for storage. With a zippered pocket to the inside of the sleeve to stash smaller essentials, it's signed off with Hoodrich branding throughout. Machine washable. | Our model is 5'7 and wears a size small.",
    img: "https://i8.amplience.net/i/jpl/jd_596980_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    type: "Women",
    color: "paige ",
    price: 60.32,
  },
  {
    title: "Nike Plus Size Air Boyfriend T-Shirt",
    description:
      "Step up your staple style with this women's Plus Size Air Boyfriend T-Shirt from Nike. In a Black colourway, this tee is cut from super-soft cotton fabric for an ultra-comfy wear. It features short sleeves and dropped shoulders for laidback vibes, with a ribbed crew neckline for extra stretch. It comes in a loose, baggy fit for a roomy feel and is finished up with Nike Air branding to the chest. Machine washable | Our model is 5'7 and wears a size XL.",
    img: "https://i8.amplience.net/i/jpl/jd_556375_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    type: "Women",
    color: "Black",
    price: 35,
  },
  {
    title: "adidas Originals Embroidered Overhead Hoodie",
    description:
      "Layer up in JD-exclusive style with this women's Embroidered Overhead Hoodie from adidas Originals. In a Solar Orange colourway, this oversized pullover has a drawcord-adjustable hood, ribbed trims and a kangaroo pocket for laid-back comfort. Made from a soft cotton and recycled poly blend for ultra-smooth feels, this fleecy hoofie is finished off with tonal adidas branding to the chest. Machine washable. | Our model is 5'7 and wears a size 8.",
    img: "https://i8.amplience.net/i/jpl/jd_558020_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    type: "Women",
    color: "Orange",
    price: 55,
  },
  {
    title: "Puma Run Woven Shorts",
    description:
      "Push your performance with these women's Run Woven Shorts from PUMA. In a Sunset Glow colourway, these standard fit shorts are cut from light, breathable polyester fabric for cool comfort. They feature an elasticated waistband for a relaxed fit and are equipped with dryCELL sweat-wicking tech to keep you dry and fresh. Finished up with PUMA branding to the leg. Machine washable | Our model is 5'5 and wears a size small.",
    img: "https://i8.amplience.net/i/jpl/jd_553237_a?qlt=92&w=750&h=957&v=1&fmt=auto",
    type: "Women",
    color: "Red",
    price: 20,
    inStock: false,
  },
];

module.exports = { products };
