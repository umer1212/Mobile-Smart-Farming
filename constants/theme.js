const colors = {
    accent: "#F3534A",
    primary: "#0AC4BA",
    // primary:"#085f63",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6"
  };
  
  const IPs = {
    ServerIP:"https://smartfarmingnodeserver.herokuapp.com/",
    DiseaseIP:"http://c5e14224a9c2.ngrok.io/predict/",
    PestIP:"http://c5e14224a9c2.ngrok.io/predictPest/",
    WeedIP:"http://192.168.10.12:3000/detection/checkWeed",
    ServerTry:'http://localhost:3000/'
  }
  const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 6,
    padding: 25,
  
    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12
  };
  
  const fonts = {
    h1: {
      fontSize: sizes.h1
    },
    h2: {
      fontSize: sizes.h2
    },
    h3: {
      fontSize: sizes.h3
    },
    header: {
      fontSize: sizes.header
    },
    title: {
      fontSize: sizes.title
    },
    body: {
      fontSize: sizes.body
    },
    caption: {
      fontSize: sizes.caption
    }
  };
  
  export { colors, sizes, fonts, IPs };