import { Linking } from "react-native";

export const suriweb_SR = "+597 7548001";
export const suriweb_NL = "+31 637060001";
export const email = "suriweb@suriwebwinkel.nl";
export const handleWhatsapp = () => {
  let msg = "Help me";
  let phoneWithCountryCode = suriweb_NL;
  let mobile =
    Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
  if (mobile) {
    if (msg) {
      let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
      Linking.openURL(url)
        .then((data) => {})
        .catch(() => {
          alert(
            "Download en installeer whatsapp om geholpen te worden via whatsapp"
          );
        });
    }
  }
};
