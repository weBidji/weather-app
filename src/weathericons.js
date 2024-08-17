export const weatherGroups = {
  clear: {
    codes: [1000, 1003],
    day: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-100" viewBox="0 0 16 16">
    <path d="M7.655 2.357a.5.5 0 0 0 .854-.353v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.353Zm-4.08 1.861c.06.026.126.039.191.039l.001-.001a.5.5 0 0 0 .355-.855l-1.064-1.06a.5.5 0 0 0-.707.708l1.062 1.06a.498.498 0 0 0 .162.11ZM.503 8.496h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm1.914 5.221a.501.501 0 0 0 .631-.063l1.063-1.06a.5.5 0 0 0-.708-.707l-1.062 1.06a.5.5 0 0 0 .076.77Zm5.225 2.14a.5.5 0 0 0 .854-.354v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.354Zm5.467-2.084a.5.5 0 0 0 .544-.816l-1.06-1.06a.498.498 0 0 0-.832.152.5.5 0 0 0 .126.555l1.06 1.06a.496.496 0 0 0 .162.109Zm.893-5.263h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm-2.031-4.327a.5.5 0 0 0 .633-.063l1.06-1.06a.5.5 0 1 0-.708-.708l-1.06 1.06a.5.5 0 0 0 .075.77Zm-6.466.075a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484Zm4.445.832a3.5 3.5 0 1 0-3.89 5.82 3.5 3.5 0 0 0 3.89-5.82Z"/>
  </svg>`,
    night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-150" viewBox="0 0 16 16">
          <path d="M4.403 1.393c-.448 2.58-.261 5.558 1.873 7.797 2.09 2.192 5.477 3.06 8.284 2.851-.255.333-.543.65-.863.946-3.035 2.808-7.81 2.66-10.66-.33a7.323 7.323 0 0 1 .334-10.463 7.57 7.57 0 0 1 1.032-.801ZM5.544.79c.114-.494-.351-.958-.811-.732a8.538 8.538 0 0 0-2.04 1.401 8.323 8.323 0 0 0-.38 11.887c3.227 3.386 8.628 3.553 12.064.374a8.432 8.432 0 0 0 1.547-1.92c.258-.438-.183-.924-.69-.843-2.705.43-6.217-.342-8.234-2.458C4.983 6.384 4.939 3.424 5.544.79Z"/>
        </svg>`,
  },
  cloudy: {
    codes: [1006, 1009],
    day: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-101" viewBox="0 0 16 16">
          <path d="M8.406 15.985a4.766 4.766 0 0 0 3.446-1.449.323.323 0 0 1 .341-.074c.31.112.645.173.995.173 1.553 0 2.812-1.209 2.812-2.7s-1.26-2.7-2.813-2.7c-.157 0-.312.013-.463.037a.32.32 0 0 1-.32-.137c-.824-1.29-2.306-2.15-3.998-2.15-1.682 0-3.157.85-3.984 2.128a.318.318 0 0 1-.3.138 2.962 2.962 0 0 0-.31-.016C2.26 9.235 1 10.444 1 11.935s1.26 2.7 2.813 2.7c.302 0 .594-.046.867-.13a.322.322 0 0 1 .324.076 4.768 4.768 0 0 0 3.402 1.404Zm3.661-2.606c-.161-.116-.41-.088-.52.074a3.788 3.788 0 0 1-3.14 1.632 3.792 3.792 0 0 1-3.091-1.56c-.106-.147-.326-.178-.482-.08-.294.183-.645.29-1.021.29-1.036 0-1.876-.806-1.876-1.8s.84-1.8 1.875-1.8c.241 0 .471.044.683.123.173.065.383-.008.455-.172.569-1.293 1.902-2.2 3.456-2.2 1.575 0 2.924.931 3.48 2.253.075.18.314.254.496.17.244-.111.517-.174.806-.174 1.035 0 1.874.806 1.874 1.8s-.839 1.8-1.874 1.8c-.42 0-.808-.132-1.12-.356ZM4.995 1.762a.516.516 0 1 0 1.007-.224L5.746.388A.516.516 0 0 0 4.74.612l.255 1.15ZM1.273 3.52l.994.633a.516.516 0 0 0 .555-.87l-.995-.633a.516.516 0 0 0-.554.87ZM.878 8.028l1.15-.256a.516.516 0 0 0-.223-1.008l-1.15.256a.516.516 0 1 0 .223 1.008Zm10.238-2.28a.535.535 0 0 0 .112-.012l1.15-.256a.516.516 0 1 0-.224-1.008l-1.15.256a.516.516 0 0 0 .112 1.02ZM8.772 2.713a.516.516 0 0 0 .712-.158l.633-.994a.516.516 0 0 0-.87-.554l-.633.994a.516.516 0 0 0 .158.712ZM3.07 7.017c.07.303.182.596.33.87a3.13 3.13 0 0 0 .909-.486 2.453 2.453 0 0 1-.233-.608 2.504 2.504 0 0 1 4.888-1.088c.003.013.002.026.005.038a5.42 5.42 0 0 1 1.063.25 3.497 3.497 0 0 0-.061-.512A3.535 3.535 0 1 0 3.07 7.017Z"/>
        </svg>`,
    night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-151" viewBox="0 0 16 16">
          <path d="M7.406 16a4.766 4.766 0 0 0 3.446-1.449.323.323 0 0 1 .341-.075c.31.113.645.174.995.174 1.553 0 2.812-1.209 2.812-2.7s-1.26-2.7-2.813-2.7c-.157 0-.312.012-.463.037a.32.32 0 0 1-.32-.138C10.58 7.86 9.098 7 7.406 7c-1.682 0-3.157.85-3.984 2.128a.318.318 0 0 1-.3.138 2.962 2.962 0 0 0-.31-.016C1.26 9.25 0 10.459 0 11.95s1.26 2.7 2.813 2.7c.302 0 .594-.046.867-.131a.322.322 0 0 1 .324.077A4.768 4.768 0 0 0 7.406 16Zm3.661-2.607c-.161-.115-.41-.087-.52.075a3.788 3.788 0 0 1-3.14 1.632 3.792 3.792 0 0 1-3.091-1.56c-.106-.147-.326-.178-.482-.08a1.93 1.93 0 0 1-1.022.29c-1.035 0-1.874-.806-1.874-1.8s.839-1.8 1.875-1.8c.24 0 .47.043.682.123.173.065.383-.008.455-.172C4.52 8.806 5.852 7.9 7.406 7.9c1.575 0 2.924.932 3.48 2.254.075.18.314.254.496.17.244-.111.517-.174.806-.174 1.035 0 1.874.806 1.874 1.8s-.839 1.8-1.874 1.8c-.42 0-.808-.133-1.12-.357Zm4.538-6.759a.412.412 0 0 0-.109.015 4.127 4.127 0 0 1-1.082.145 4.303 4.303 0 0 1-1.424-.248 4.276 4.276 0 0 1-2.725-5.086A.389.389 0 0 0 9.9.972a.374.374 0 0 0-.14.027A4.772 4.772 0 0 0 6.779 5.72c.007.12.038.233.055.35a5.29 5.29 0 0 1 .667-.045c.113 0 .224.012.336.02a3.563 3.563 0 0 1-.06-.384 3.782 3.782 0 0 1 1.357-3.138c.003.553.092 1.103.262 1.629A5.25 5.25 0 0 0 12.66 7.49c.563.2 1.156.302 1.754.304h.047a3.79 3.79 0 0 1-.886.771c.32.165.614.374.874.622a4.774 4.774 0 0 0 1.525-2.037.384.384 0 0 0-.37-.516h.001Z"/>
        </svg>`,
  },
  fog: {
    codes: [1030, 1135, 1147],
    day: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-501" viewBox="0 0 16 16">
    <path d="M.5 11a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm3 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm4.5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM4.5 15a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm3.4-5c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
    night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-501" viewBox="0 0 16 16">
    <path d="M.5 11a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm3 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm4.5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM4.5 15a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm3.4-5c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
  },
  rain: {
    codes: [
      1063, 1150, 1180, 1183, 1186, 1189, 1192, 1195, 1201, 1240, 1243, 1246,
    ],
    day: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-306" viewBox="0 0 16 16">
    <path d="M2.293 13.707A1 1 0 0 1 2 13c0-.5.555-1.395 1-2 .445.605 1 1.5 1 2a1 1 0 0 1-1.707.707Zm10 0A1 1 0 0 1 12 13c0-.5.555-1.395 1-2 .445.605 1 1.5 1 2a1 1 0 0 1-1.707.707ZM7 15a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm.9-5c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
    night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-351" viewBox="0 0 16 16">
    <path d="M3.293 14.707A1 1 0 0 1 3 14c0-.5.555-1.395 1-2 .445.605 1 1.5 1 2a1 1 0 0 1-1.707.707Zm7 0A1 1 0 0 1 10 14c0-.5.555-1.395 1-2 .445.605 1 1.5 1 2a1 1 0 0 1-1.707.707ZM6.5 15a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm.906-2.5a4.766 4.766 0 0 0 3.446-1.449.323.323 0 0 1 .341-.075c.31.113.645.174.995.174C13.74 11.15 15 9.941 15 8.45s-1.26-2.7-2.813-2.7c-.157 0-.312.013-.463.037a.32.32 0 0 1-.32-.138C10.58 4.36 9.098 3.5 7.406 3.5c-1.682 0-3.157.85-3.984 2.128a.318.318 0 0 1-.3.138 2.962 2.962 0 0 0-.31-.016C1.26 5.75 0 6.959 0 8.45s1.26 2.7 2.813 2.7c.302 0 .594-.046.867-.131a.322.322 0 0 1 .324.077A4.768 4.768 0 0 0 7.406 12.5Zm3.661-2.606c-.161-.116-.41-.088-.52.074a3.788 3.788 0 0 1-3.14 1.632 3.792 3.792 0 0 1-3.091-1.56c-.106-.147-.326-.178-.482-.08a1.93 1.93 0 0 1-1.022.29c-1.035 0-1.874-.806-1.874-1.8s.839-1.8 1.875-1.8c.24 0 .47.044.682.123.173.065.383-.008.455-.173.569-1.293 1.902-2.2 3.456-2.2 1.575 0 2.924.932 3.48 2.254.075.18.314.254.496.17.244-.111.517-.174.806-.174 1.035 0 1.874.806 1.874 1.8s-.839 1.8-1.874 1.8c-.42 0-.808-.133-1.12-.356Zm4.399-5.679a.31.31 0 0 0-.08.01 3.066 3.066 0 0 1-1.866-.076A3.183 3.183 0 0 1 11.492.364.29.29 0 0 0 11.22 0a.28.28 0 0 0-.104.02 3.546 3.546 0 0 0-2.21 3.096c.34.063.671.16.99.293a2.56 2.56 0 0 1 .54-1.671 4.166 4.166 0 0 0 2.755 3.356c.274.096.558.164.846.203a2.611 2.611 0 0 1-.239.163c.304.173.582.39.823.643a3.553 3.553 0 0 0 1.12-1.504.285.285 0 0 0-.275-.384Z"/>
  </svg>`,
  },
  snow: {
    codes: [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258],
    day: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-401" viewBox="0 0 16 16">
    <path d="M3.151 11.35a.35.35 0 1 1 .7 0v.544l.47-.272a.35.35 0 1 1 .35.606l-.47.272.47.272a.35.35 0 1 1-.35.606l-.47-.272v.544a.35.35 0 1 1-.7 0v-.544l-.47.272a.35.35 0 1 1-.35-.606l.47-.272-.47-.272a.35.35 0 1 1 .35-.606l.47.272v-.544Zm9 0a.35.35 0 1 1 .7 0v.544l.47-.272a.35.35 0 1 1 .35.606l-.47.272.47.272a.35.35 0 1 1-.35.606l-.47-.272v.544a.35.35 0 1 1-.7 0v-.544l-.47.272a.35.35 0 1 1-.35-.606l.47-.272-.47-.272a.35.35 0 1 1 .35-.606l.47.272v-.544ZM8.001 13a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
    night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-401" viewBox="0 0 16 16">
    <path d="M3.151 11.35a.35.35 0 1 1 .7 0v.544l.47-.272a.35.35 0 1 1 .35.606l-.47.272.47.272a.35.35 0 1 1-.35.606l-.47-.272v.544a.35.35 0 1 1-.7 0v-.544l-.47.272a.35.35 0 1 1-.35-.606l.47-.272-.47-.272a.35.35 0 1 1 .35-.606l.47.272v-.544Zm9 0a.35.35 0 1 1 .7 0v.544l.47-.272a.35.35 0 1 1 .35.606l-.47.272.47.272a.35.35 0 1 1-.35.606l-.47-.272v.544a.35.35 0 1 1-.7 0v-.544l-.47.272a.35.35 0 1 1-.35-.606l.47-.272-.47-.272a.35.35 0 1 1 .35-.606l.47.272v-.544ZM8.001 13a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
  },
  sleet: {
    codes: [1069, 1072, 1168, 1171, 1204, 1207, 1237, 1249, 1252, 1261, 1264],
    day: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-404" viewBox="0 0 16 16">
    <path d="M1 13a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm12 0a1 1 0 0 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm-7.849.35a.35.35 0 1 1 .7 0v.544l.47-.272a.35.35 0 1 1 .35.606l-.47.272.47.272a.35.35 0 1 1-.35.606l-.47-.272v.544a.35.35 0 1 1-.7 0v-.544l-.47.272a.35.35 0 1 1-.35-.606l.47-.272-.47-.272a.35.35 0 1 1 .35-.606l.47.272v-.544Zm5.35-.35a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
    night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-404" viewBox="0 0 16 16">
    <path d="M1 13a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm12 0a1 1 0 0 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm-7.849.35a.35.35 0 1 1 .7 0v.544l.47-.272a.35.35 0 1 1 .35.606l-.47.272.47.272a.35.35 0 1 1-.35.606l-.47-.272v.544a.35.35 0 1 1-.7 0v-.544l-.47.272a.35.35 0 1 1-.35-.606l.47-.272-.47-.272a.35.35 0 1 1 .35-.606l.47.272v-.544Zm5.35-.35a.35.35 0 0 0-.35.35v.544l-.47-.272a.35.35 0 1 0-.35.606l.47.272-.47.272a.35.35 0 1 0 .35.606l.47-.272v.544a.35.35 0 1 0 .7 0v-.544l.47.272a.35.35 0 1 0 .35-.606l-.47-.272.47-.272a.35.35 0 1 0-.35-.606l-.47.272v-.544a.35.35 0 0 0-.35-.35ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
  },
  thunderstorm: {
    codes: [1087, 1273, 1276, 1279, 1282],
    day: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-303" viewBox="0 0 16 16">
    <path d="M0 11.5a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2ZM3 13a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm8.293.707A1 1 0 0 1 11 13c0-.5.555-1.395 1-2 .445.605 1 1.5 1 2a1 1 0 0 1-1.707.707ZM14 11.5a1 1 0 0 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm-5.54 1.126c-.054 0-.089-.05-.065-.093l.792-1.438C9.21 11.05 9.176 11 9.122 11H7.544a.147.147 0 0 0-.076.02.158.158 0 0 0-.058.057l-1.397 2.637c-.042.079.022.17.118.17h1.42c.05 0 .084.043.069.086l-.739 1.943c-.027.07.072.118.124.063l2.978-3.243c.04-.042.006-.107-.055-.107H8.46ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
    night: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="qi-303" viewBox="0 0 16 16">
    <path d="M0 11.5a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2ZM3 13a1 1 0 1 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm8.293.707A1 1 0 0 1 11 13c0-.5.555-1.395 1-2 .445.605 1 1.5 1 2a1 1 0 0 1-1.707.707ZM14 11.5a1 1 0 0 0 2 0c0-.5-.555-1.395-1-2-.445.605-1 1.5-1 2Zm-5.54 1.126c-.054 0-.089-.05-.065-.093l.792-1.438C9.21 11.05 9.176 11 9.122 11H7.544a.147.147 0 0 0-.076.02.158.158 0 0 0-.058.057l-1.397 2.637c-.042.079.022.17.118.17h1.42c.05 0 .084.043.069.086l-.739 1.943c-.027.07.072.118.124.063l2.978-3.243c.04-.042.006-.107-.055-.107H8.46ZM7.9 10c1.453 0 2.761-.62 3.675-1.61a.335.335 0 0 1 .365-.083 3 3 0 1 0 .566-5.767.335.335 0 0 1-.341-.152A4.997 4.997 0 0 0 7.9 0a4.997 4.997 0 0 0-4.25 2.365.334.334 0 0 1-.32.153 3 3 0 1 0 .596 5.836.334.334 0 0 1 .345.086A4.99 4.99 0 0 0 7.9 10Zm3.905-2.896c-.172-.129-.438-.097-.555.083A3.997 3.997 0 0 1 7.9 9a3.996 3.996 0 0 1-3.297-1.734c-.112-.163-.347-.197-.513-.089a2 2 0 1 1-.362-3.54c.184.072.408-.01.485-.192a4.001 4.001 0 0 1 7.398.059c.08.2.335.282.53.19a2 2 0 1 1-.335 3.41Z"/>
  </svg>`,
  },
};
