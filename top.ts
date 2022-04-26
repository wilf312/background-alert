import { serve } from "https://deno.land/x/sift@0.5.0/mod.ts";

const production = (color: string) => `background-image: url('data:image/svg+xml;charset=UTF-8,<svg width="60" height="35" viewBox="0 0 60 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.0671 34.707L1.53317 26.4299L2.42672 26.0483L2.835 27.0046L2.94474 26.9578C2.96805 26.8242 3.00521 26.6508 3.05624 26.4375C3.10876 26.2205 3.22134 25.9994 3.39399 25.7744C3.56814 25.5456 3.85117 25.3475 4.24308 25.1802C4.74995 24.9638 5.25083 24.8997 5.74572 24.9881C6.24061 25.0764 6.69576 25.3068 7.11118 25.6793C7.5266 26.0518 7.86928 26.5542 8.13924 27.1865C8.41142 27.824 8.53892 28.4228 8.52174 28.9831C8.50345 29.5408 8.35692 30.0296 8.08217 30.4496C7.8063 30.8671 7.41754 31.1829 6.9159 31.397C6.52921 31.5621 6.19227 31.6303 5.90508 31.6016C5.61677 31.5702 5.37477 31.499 5.17908 31.3879C4.98228 31.2743 4.82649 31.1771 4.7117 31.0963L4.63332 31.1298L5.99201 34.3121L5.0671 34.707ZM3.72747 29.0515C3.92157 29.5061 4.15942 29.8788 4.44103 30.1694C4.72153 30.4573 5.03164 30.6447 5.37135 30.7313C5.70994 30.8153 6.06475 30.7781 6.43576 30.6197C6.82244 30.4546 7.10161 30.215 7.27326 29.9007C7.44641 29.5828 7.52412 29.2222 7.50639 28.8189C7.49017 28.4119 7.39058 27.9942 7.20764 27.5657C7.02692 27.1424 6.79874 26.7888 6.52309 26.505C6.24893 26.2173 5.93883 26.03 5.59277 25.943C5.24822 25.8523 4.87999 25.8906 4.48807 26.0579C4.11184 26.2185 3.83642 26.4489 3.6618 26.7489C3.48607 27.0463 3.40539 27.3928 3.41977 27.7882C3.43303 28.181 3.5356 28.6021 3.72747 29.0515ZM10.8285 29.5783L8.25836 23.5585L9.15191 23.177L9.54011 24.0863L9.60282 24.0595C9.58538 23.7148 9.68077 23.3883 9.88897 23.0801C10.0972 22.7719 10.3815 22.5408 10.7421 22.3869C10.81 22.3579 10.8955 22.3229 10.9985 22.282C11.1015 22.2412 11.1803 22.2122 11.2348 22.1951L11.6363 23.1357C11.6016 23.1412 11.5248 23.1601 11.4057 23.1924C11.2882 23.221 11.168 23.2615 11.0452 23.3139C10.7526 23.4388 10.5175 23.6118 10.34 23.8328C10.1641 24.05 10.0552 24.2942 10.0134 24.5653C9.97311 24.8327 10.011 25.1023 10.127 25.374L11.7534 29.1834L10.8285 29.5783ZM17.2506 26.9846C16.7071 27.2167 16.1751 27.2909 15.6545 27.2074C15.1364 27.1227 14.6632 26.897 14.2347 26.5301C13.8088 26.162 13.4632 25.6671 13.1977 25.0453C12.9299 24.4182 12.8099 23.8223 12.8375 23.2576C12.8678 22.6918 13.0315 22.1925 13.3286 21.7598C13.6284 21.326 14.05 20.9931 14.5934 20.7611C15.1369 20.5291 15.6676 20.4554 16.1856 20.54C16.7063 20.6235 17.1801 20.8506 17.6071 21.2212C18.0367 21.5908 18.3853 22.089 18.6531 22.7161C18.9185 23.3379 19.0356 23.9305 19.0043 24.4937C18.9755 25.0558 18.8113 25.5538 18.5115 25.9876C18.2143 26.4203 17.794 26.7526 17.2506 26.9846ZM16.8959 26.1538C17.3087 25.9775 17.6031 25.7267 17.7793 25.4013C17.9554 25.0759 18.0339 24.7134 18.0147 24.3139C17.9954 23.9143 17.8999 23.5134 17.7281 23.111C17.5564 22.7086 17.3323 22.361 17.0559 22.0682C16.7795 21.7754 16.4623 21.5787 16.1043 21.4783C15.7464 21.3778 15.361 21.4157 14.9482 21.5919C14.5354 21.7682 14.2414 22.0203 14.0664 22.3484C13.8914 22.6764 13.814 23.0415 13.8344 23.4436C13.8547 23.8458 13.9508 24.248 14.1226 24.6504C14.2944 25.0528 14.5179 25.3991 14.7932 25.6893C15.0684 25.9795 15.3845 26.1735 15.7414 26.2714C16.0982 26.3692 16.483 26.33 16.8959 26.1538ZM23.6632 24.2468C23.1616 24.4609 22.6646 24.5233 22.1723 24.4338C21.6789 24.3418 21.2245 24.1095 20.8091 23.737C20.3926 23.3619 20.0482 22.8556 19.776 22.2181C19.5061 21.5858 19.3803 20.9909 19.3986 20.4332C19.4169 19.8756 19.5652 19.3875 19.8437 18.9689C20.1222 18.5504 20.5149 18.2329 21.0218 18.0165C21.4137 17.8492 21.7512 17.7823 22.0342 17.8159C22.3188 17.8458 22.5564 17.9173 22.7468 18.0306C22.9388 18.1402 23.091 18.2327 23.2036 18.3082L23.282 18.2748L22.017 15.3119L22.9419 14.917L26.3687 22.9434L25.4752 23.3249L25.0803 22.4L24.9705 22.4468C24.9495 22.5855 24.9119 22.7653 24.8579 22.9861C24.8028 23.2042 24.6868 23.4282 24.5101 23.6582C24.3322 23.8855 24.0499 24.0817 23.6632 24.2468ZM23.4339 23.3624C23.8049 23.204 24.0772 22.9734 24.2507 22.6708C24.4231 22.3655 24.5022 22.012 24.4882 21.6102C24.4731 21.2058 24.3685 20.7763 24.1744 20.3217C23.9826 19.8723 23.7494 19.507 23.4748 19.2257C23.1992 18.9418 22.8932 18.7605 22.5568 18.6817C22.2193 18.6003 21.8625 18.6399 21.4862 18.8005C21.0943 18.9678 20.8107 19.2079 20.6353 19.5206C20.4614 19.8296 20.3822 20.1831 20.3977 20.5812C20.4147 20.9755 20.5136 21.3843 20.6943 21.8075C20.8772 22.236 21.1087 22.5974 21.3889 22.8918C21.6705 23.1824 21.9847 23.3757 22.3315 23.4716C22.6797 23.5639 23.0472 23.5275 23.4339 23.3624ZM30.934 18.0844L29.4147 14.5258L30.3396 14.1309L32.9097 20.1507L31.9848 20.5456L31.5498 19.5266L31.4871 19.5534C31.4765 19.9193 31.368 20.273 31.1616 20.6144C30.9541 20.9532 30.6231 21.2196 30.1685 21.4137C29.7922 21.5744 29.4227 21.6349 29.0598 21.5952C28.6957 21.5529 28.3587 21.4003 28.0487 21.1372C27.7376 20.8716 27.4727 20.4827 27.2541 19.9706L25.621 16.1455L26.5459 15.7507L28.1522 19.513C28.3396 19.9519 28.6119 20.2496 28.9691 20.406C29.3288 20.5613 29.7007 20.557 30.0848 20.393C30.3147 20.2948 30.5235 20.1362 30.711 19.9171C30.9012 19.6969 31.0254 19.4308 31.0837 19.1186C31.1445 18.8054 31.0946 18.4606 30.934 18.0844ZM37.1028 18.5087C36.5385 18.7497 35.9956 18.8239 35.4742 18.7314C34.9529 18.6389 34.4826 18.4057 34.0635 18.0317C33.6443 17.6578 33.3065 17.1703 33.0499 16.5694C32.7889 15.958 32.6709 15.3705 32.6959 14.8069C32.7224 14.2395 32.8818 13.7375 33.1741 13.3007C33.4679 12.8602 33.8866 12.5239 34.43 12.2919C34.8533 12.1111 35.2682 12.0267 35.6748 12.0384C36.0814 12.0502 36.4533 12.1508 36.7907 12.3404C37.128 12.53 37.4031 12.8018 37.616 13.1557L36.6911 13.5506C36.5034 13.3064 36.2429 13.1303 35.9096 13.0224C35.5777 12.9108 35.208 12.942 34.8004 13.116C34.4399 13.27 34.1639 13.499 33.9725 13.8031C33.7826 14.1035 33.6843 14.4559 33.6778 14.8603C33.6728 15.2609 33.7673 15.6885 33.9614 16.1431C34.16 16.6082 34.406 16.9819 34.6996 17.2643C34.9958 17.5456 35.3191 17.7242 35.6697 17.8C36.0228 17.8748 36.3823 17.834 36.7481 17.6779C36.9885 17.5752 37.1888 17.4403 37.349 17.273C37.5093 17.1057 37.6239 16.9147 37.6928 16.6999C37.7618 16.4852 37.7781 16.2558 37.7419 16.0118L38.6668 15.6169C38.7663 15.9945 38.7736 16.3698 38.6888 16.7427C38.6054 17.1119 38.431 17.4521 38.1653 17.7632C37.9011 18.0706 37.547 18.3191 37.1028 18.5087ZM40.8163 9.65788L41.151 10.4417L38.0314 11.7736L37.6967 10.9898L40.8163 9.65788ZM37.9902 9.15937L38.9151 8.76448L41.3648 14.5021C41.4763 14.7633 41.5979 14.9431 41.7294 15.0414C41.8625 15.136 41.9986 15.1798 42.1377 15.1729C42.2784 15.1623 42.4166 15.1279 42.5525 15.0699C42.6544 15.0264 42.7357 14.9855 42.7966 14.9472C42.8563 14.9062 42.9041 14.8735 42.94 14.8489L43.4828 15.5994C43.4302 15.6497 43.3527 15.7106 43.2504 15.7821C43.1492 15.8562 43.0124 15.93 42.8399 16.0037C42.5786 16.1152 42.2986 16.1683 41.9998 16.1631C41.7036 16.1567 41.4242 16.0737 41.1614 15.9141C40.9012 15.7533 40.6964 15.4979 40.547 15.1478L37.9902 9.15937ZM44.7778 15.0836L42.2076 9.06387L43.1325 8.66898L45.7027 14.6887L44.7778 15.0836ZM42.2496 7.85979C42.0693 7.93676 41.8876 7.94173 41.7045 7.87471C41.5241 7.80657 41.3971 7.68628 41.3234 7.51384C41.2498 7.3414 41.2508 7.16645 41.3264 6.98899C41.4046 6.81041 41.5338 6.68264 41.7141 6.60567C41.8944 6.5287 42.0748 6.52428 42.2552 6.59242C42.4383 6.65945 42.5666 6.77918 42.6402 6.95162C42.7139 7.12406 42.7116 7.29957 42.6334 7.47814C42.5578 7.6556 42.4298 7.78282 42.2496 7.85979ZM49.8958 13.0468C49.3523 13.2788 48.8203 13.353 48.2996 13.2695C47.7816 13.1849 47.3084 12.9591 46.8799 12.5922C46.454 12.2242 46.1083 11.7292 45.8428 11.1074C45.5751 10.4804 45.4551 9.88446 45.4827 9.31973C45.513 8.75389 45.6767 8.25462 45.9738 7.82194C46.2736 7.38815 46.6952 7.05524 47.2386 6.82321C47.7821 6.59118 48.3128 6.51749 48.8308 6.60213C49.3515 6.68566 49.8253 6.91274 50.2523 7.28337C50.6819 7.65288 51.0305 8.15117 51.2982 8.77823C51.5637 9.40006 51.6808 9.99259 51.6494 10.5558C51.6207 11.1179 51.4564 11.6159 51.1567 12.0497C50.8595 12.4824 50.4392 12.8147 49.8958 13.0468ZM49.541 12.2159C49.9539 12.0397 50.2483 11.7888 50.4245 11.4634C50.6006 11.138 50.6791 10.7755 50.6599 10.376C50.6406 9.97643 50.5451 9.57548 50.3733 9.17312C50.2015 8.77076 49.9775 8.42316 49.7011 8.13032C49.4247 7.83749 49.1075 7.64084 48.7495 7.54038C48.3916 7.43992 48.0062 7.47781 47.5934 7.65406C47.1805 7.83031 46.8866 8.08245 46.7116 8.41048C46.5366 8.7385 46.4592 9.10359 46.4796 9.50575C46.4999 9.9079 46.596 10.3102 46.7678 10.7125C46.9395 11.1149 47.1631 11.4612 47.4383 11.7514C47.7136 12.0416 48.0297 12.2357 48.3865 12.3335C48.7434 12.4314 49.1282 12.3922 49.541 12.2159ZM53.3606 7.13781L54.9067 10.7591L53.9818 11.154L51.4116 5.13421L52.3052 4.7527L52.7068 5.69329L52.7852 5.65982C52.7957 5.29389 52.9051 4.95682 53.1133 4.64861C53.3204 4.33779 53.6513 4.08533 54.1059 3.89123C54.5135 3.71721 54.9058 3.64855 55.2829 3.68525C55.6589 3.71934 56.0037 3.86865 56.3174 4.13319C56.63 4.39511 56.8957 4.78212 57.1143 5.29422L58.7474 9.11926L57.8225 9.51415L56.2162 5.75181C56.0143 5.27891 55.7342 4.96294 55.3759 4.80391C55.0165 4.64227 54.6226 4.65292 54.1941 4.83586C53.8989 4.96192 53.6623 5.13859 53.4844 5.3659C53.3092 5.59209 53.2074 5.85643 53.179 6.15892C53.1506 6.4614 53.2111 6.7877 53.3606 7.13781Z" fill="${color}"/></svg>');`

const createResponse = (backgroundImage: string) => {
  return new Response(`
body {
  ${backgroundImage}
  background-position: center center;
  background-repeat: repeat;
  background-size: 320px 275px;
}
`, {"headers": {"content-type": "text/css; charset=utf-8"}}); 
}

const page = (color: string = "red"): Response => {
  const a = new URL(location.href)
  const isDev = a.searchParams.get('dev') === 'dev'
  
  const key = isDev a.searchParams.get('type') : location.host
  if (key.indexOf('deno') != -1) {
    return createResponse(production('black'))
  } else if (key.indexOf('local') != -1) {
    return createResponse(production('white'))
  }
  
  return createResponse(production(color))
}

serve({
  "/": () => page("red"),
  404: () => page("blue"),
});
