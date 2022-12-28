import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useNavigation_barCb, useHero_sectionCb, useAlbum_sectionCb, useSlider_sectionCb, usemng_sliderCb, usewhole_sliderCb, usebottomsCb, useFlex282Cb, useFlex283Cb, useFlex285Cb, useFlex290Cb, useFlex288Cb, useFlex287Cb, useFlex286Cb, useDiv87Cb, useFlex289Cb, useDiv88Cb, useFlex295Cb, useFlex293Cb, useFlex292Cb, useFlex291Cb, useDiv89Cb, useFlex294Cb, useDiv90Cb, useFlex300Cb, useFlex298Cb, useFlex297Cb, useFlex296Cb, useDiv91Cb, useFlex299Cb, useDiv92Cb, useFlex305Cb, useFlex303Cb, useFlex302Cb, useFlex301Cb, useDiv93Cb, useFlex304Cb, useDiv94Cb, useFlex310Cb, useFlex308Cb, useFlex307Cb, useFlex306Cb, useDiv95Cb, useFlex309Cb, useDiv96Cb, usetopsCb, useFlex278Cb, useFlex275Cb, useFlex268Cb, useFlex276Cb, useFlex269Cb, useDiv84Cb, useDiv85Cb, useDiv86Cb, useBlogs_sectionCb, useProduct_sectionCb, useFeatures_sectionCb, useTestimonial_sectionCb, useFAQ_sectionCb, useFooterCb, useFlex311Cb, useMain_coverCb, usemngnavbarCb, usemng_heroCb, usemng_albumCb, useTextBox107Cb, useTextBox108Cb, useTextBox106Cb, useImage75Cb, useImage76Cb, useTextBox110Cb, useTextBox111Cb, useTextBox109Cb, useImage77Cb, useImage78Cb, useTextBox113Cb, useTextBox114Cb, useTextBox112Cb, useImage79Cb, useImage80Cb, useTextBox116Cb, useTextBox117Cb, useTextBox115Cb, useImage81Cb, useImage82Cb, useTextBox119Cb, useTextBox120Cb, useTextBox118Cb, useImage83Cb, useImage84Cb, useFlex261Cb, useButton10Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, usemng_blogsCb, usemng_productCb, usemng_featuresCb, usemng_bottom_testimonialCb, usemng_top_testimonalCb, usemng_top_faqCb, usemng_bottom_faqCb, usemng_footerCb, useImage85Cb, useImage86Cb, usemng_coverCb } from "../page-cbs/navigation bar";
import "../page-css/navigation bar.css";
import "../custom/navigation bar";

export default function NavigationBar() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Navigation_barProps = useStore((state)=>state["navigation bar"]["Navigation_bar"]);
const Navigation_barIoProps = useIoStore((state)=>state["navigation bar"]["Navigation_bar"]);
const Navigation_barCb = useNavigation_barCb()
const Hero_sectionProps = useStore((state)=>state["navigation bar"]["Hero_section"]);
const Hero_sectionIoProps = useIoStore((state)=>state["navigation bar"]["Hero_section"]);
const Hero_sectionCb = useHero_sectionCb()
const Album_sectionProps = useStore((state)=>state["navigation bar"]["Album_section"]);
const Album_sectionIoProps = useIoStore((state)=>state["navigation bar"]["Album_section"]);
const Album_sectionCb = useAlbum_sectionCb()
const Slider_sectionProps = useStore((state)=>state["navigation bar"]["Slider_section"]);
const Slider_sectionIoProps = useIoStore((state)=>state["navigation bar"]["Slider_section"]);
const Slider_sectionCb = useSlider_sectionCb()
const mng_sliderProps = useStore((state)=>state["navigation bar"]["mng_slider"]);
const mng_sliderIoProps = useIoStore((state)=>state["navigation bar"]["mng_slider"]);
const mng_sliderCb = usemng_sliderCb()
const whole_sliderProps = useStore((state)=>state["navigation bar"]["whole_slider"]);
const whole_sliderIoProps = useIoStore((state)=>state["navigation bar"]["whole_slider"]);
const whole_sliderCb = usewhole_sliderCb()
const bottomsProps = useStore((state)=>state["navigation bar"]["bottoms"]);
const bottomsIoProps = useIoStore((state)=>state["navigation bar"]["bottoms"]);
const bottomsCb = usebottomsCb()
const Flex282Props = useStore((state)=>state["navigation bar"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["navigation bar"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex283Props = useStore((state)=>state["navigation bar"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["navigation bar"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex285Props = useStore((state)=>state["navigation bar"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["navigation bar"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex290Props = useStore((state)=>state["navigation bar"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["navigation bar"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex288Props = useStore((state)=>state["navigation bar"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["navigation bar"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex287Props = useStore((state)=>state["navigation bar"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["navigation bar"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex286Props = useStore((state)=>state["navigation bar"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["navigation bar"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Div87Props = useStore((state)=>state["navigation bar"]["Div87"]);
const Div87IoProps = useIoStore((state)=>state["navigation bar"]["Div87"]);
const Div87Cb = useDiv87Cb()
const Flex289Props = useStore((state)=>state["navigation bar"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["navigation bar"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Div88Props = useStore((state)=>state["navigation bar"]["Div88"]);
const Div88IoProps = useIoStore((state)=>state["navigation bar"]["Div88"]);
const Div88Cb = useDiv88Cb()
const Flex295Props = useStore((state)=>state["navigation bar"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["navigation bar"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex293Props = useStore((state)=>state["navigation bar"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["navigation bar"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex292Props = useStore((state)=>state["navigation bar"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["navigation bar"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex291Props = useStore((state)=>state["navigation bar"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["navigation bar"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Div89Props = useStore((state)=>state["navigation bar"]["Div89"]);
const Div89IoProps = useIoStore((state)=>state["navigation bar"]["Div89"]);
const Div89Cb = useDiv89Cb()
const Flex294Props = useStore((state)=>state["navigation bar"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["navigation bar"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Div90Props = useStore((state)=>state["navigation bar"]["Div90"]);
const Div90IoProps = useIoStore((state)=>state["navigation bar"]["Div90"]);
const Div90Cb = useDiv90Cb()
const Flex300Props = useStore((state)=>state["navigation bar"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["navigation bar"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Flex298Props = useStore((state)=>state["navigation bar"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["navigation bar"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Flex297Props = useStore((state)=>state["navigation bar"]["Flex297"]);
const Flex297IoProps = useIoStore((state)=>state["navigation bar"]["Flex297"]);
const Flex297Cb = useFlex297Cb()
const Flex296Props = useStore((state)=>state["navigation bar"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["navigation bar"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Div91Props = useStore((state)=>state["navigation bar"]["Div91"]);
const Div91IoProps = useIoStore((state)=>state["navigation bar"]["Div91"]);
const Div91Cb = useDiv91Cb()
const Flex299Props = useStore((state)=>state["navigation bar"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["navigation bar"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Div92Props = useStore((state)=>state["navigation bar"]["Div92"]);
const Div92IoProps = useIoStore((state)=>state["navigation bar"]["Div92"]);
const Div92Cb = useDiv92Cb()
const Flex305Props = useStore((state)=>state["navigation bar"]["Flex305"]);
const Flex305IoProps = useIoStore((state)=>state["navigation bar"]["Flex305"]);
const Flex305Cb = useFlex305Cb()
const Flex303Props = useStore((state)=>state["navigation bar"]["Flex303"]);
const Flex303IoProps = useIoStore((state)=>state["navigation bar"]["Flex303"]);
const Flex303Cb = useFlex303Cb()
const Flex302Props = useStore((state)=>state["navigation bar"]["Flex302"]);
const Flex302IoProps = useIoStore((state)=>state["navigation bar"]["Flex302"]);
const Flex302Cb = useFlex302Cb()
const Flex301Props = useStore((state)=>state["navigation bar"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["navigation bar"]["Flex301"]);
const Flex301Cb = useFlex301Cb()
const Div93Props = useStore((state)=>state["navigation bar"]["Div93"]);
const Div93IoProps = useIoStore((state)=>state["navigation bar"]["Div93"]);
const Div93Cb = useDiv93Cb()
const Flex304Props = useStore((state)=>state["navigation bar"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["navigation bar"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Div94Props = useStore((state)=>state["navigation bar"]["Div94"]);
const Div94IoProps = useIoStore((state)=>state["navigation bar"]["Div94"]);
const Div94Cb = useDiv94Cb()
const Flex310Props = useStore((state)=>state["navigation bar"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["navigation bar"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const Flex308Props = useStore((state)=>state["navigation bar"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["navigation bar"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex307Props = useStore((state)=>state["navigation bar"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["navigation bar"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex306Props = useStore((state)=>state["navigation bar"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["navigation bar"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Div95Props = useStore((state)=>state["navigation bar"]["Div95"]);
const Div95IoProps = useIoStore((state)=>state["navigation bar"]["Div95"]);
const Div95Cb = useDiv95Cb()
const Flex309Props = useStore((state)=>state["navigation bar"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["navigation bar"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Div96Props = useStore((state)=>state["navigation bar"]["Div96"]);
const Div96IoProps = useIoStore((state)=>state["navigation bar"]["Div96"]);
const Div96Cb = useDiv96Cb()
const topsProps = useStore((state)=>state["navigation bar"]["tops"]);
const topsIoProps = useIoStore((state)=>state["navigation bar"]["tops"]);
const topsCb = usetopsCb()
const Flex278Props = useStore((state)=>state["navigation bar"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["navigation bar"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex275Props = useStore((state)=>state["navigation bar"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["navigation bar"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex268Props = useStore((state)=>state["navigation bar"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["navigation bar"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex276Props = useStore((state)=>state["navigation bar"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["navigation bar"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex269Props = useStore((state)=>state["navigation bar"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["navigation bar"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Div84Props = useStore((state)=>state["navigation bar"]["Div84"]);
const Div84IoProps = useIoStore((state)=>state["navigation bar"]["Div84"]);
const Div84Cb = useDiv84Cb()
const Div85Props = useStore((state)=>state["navigation bar"]["Div85"]);
const Div85IoProps = useIoStore((state)=>state["navigation bar"]["Div85"]);
const Div85Cb = useDiv85Cb()
const Div86Props = useStore((state)=>state["navigation bar"]["Div86"]);
const Div86IoProps = useIoStore((state)=>state["navigation bar"]["Div86"]);
const Div86Cb = useDiv86Cb()
const Blogs_sectionProps = useStore((state)=>state["navigation bar"]["Blogs_section"]);
const Blogs_sectionIoProps = useIoStore((state)=>state["navigation bar"]["Blogs_section"]);
const Blogs_sectionCb = useBlogs_sectionCb()
const Product_sectionProps = useStore((state)=>state["navigation bar"]["Product_section"]);
const Product_sectionIoProps = useIoStore((state)=>state["navigation bar"]["Product_section"]);
const Product_sectionCb = useProduct_sectionCb()
const Features_sectionProps = useStore((state)=>state["navigation bar"]["Features_section"]);
const Features_sectionIoProps = useIoStore((state)=>state["navigation bar"]["Features_section"]);
const Features_sectionCb = useFeatures_sectionCb()
const Testimonial_sectionProps = useStore((state)=>state["navigation bar"]["Testimonial_section"]);
const Testimonial_sectionIoProps = useIoStore((state)=>state["navigation bar"]["Testimonial_section"]);
const Testimonial_sectionCb = useTestimonial_sectionCb()
const FAQ_sectionProps = useStore((state)=>state["navigation bar"]["FAQ_section"]);
const FAQ_sectionIoProps = useIoStore((state)=>state["navigation bar"]["FAQ_section"]);
const FAQ_sectionCb = useFAQ_sectionCb()
const FooterProps = useStore((state)=>state["navigation bar"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["navigation bar"]["Footer"]);
const FooterCb = useFooterCb()
const Flex311Props = useStore((state)=>state["navigation bar"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["navigation bar"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Main_coverProps = useStore((state)=>state["navigation bar"]["Main_cover"]);
const Main_coverIoProps = useIoStore((state)=>state["navigation bar"]["Main_cover"]);
const Main_coverCb = useMain_coverCb()
const mngnavbarProps = useStore((state)=>state["navigation bar"]["mngnavbar"]);
const mngnavbarIoProps = useIoStore((state)=>state["navigation bar"]["mngnavbar"]);
const mngnavbarCb = usemngnavbarCb()
const mng_heroProps = useStore((state)=>state["navigation bar"]["mng_hero"]);
const mng_heroIoProps = useIoStore((state)=>state["navigation bar"]["mng_hero"]);
const mng_heroCb = usemng_heroCb()
const mng_albumProps = useStore((state)=>state["navigation bar"]["mng_album"]);
const mng_albumIoProps = useIoStore((state)=>state["navigation bar"]["mng_album"]);
const mng_albumCb = usemng_albumCb()
const TextBox107Props = useStore((state)=>state["navigation bar"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["navigation bar"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["navigation bar"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["navigation bar"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox106Props = useStore((state)=>state["navigation bar"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["navigation bar"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image75Props = useStore((state)=>state["navigation bar"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["navigation bar"]["Image75"]);
const Image75Cb = useImage75Cb()
const Image76Props = useStore((state)=>state["navigation bar"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["navigation bar"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox110Props = useStore((state)=>state["navigation bar"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["navigation bar"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const TextBox111Props = useStore((state)=>state["navigation bar"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["navigation bar"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox109Props = useStore((state)=>state["navigation bar"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["navigation bar"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Image77Props = useStore((state)=>state["navigation bar"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["navigation bar"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["navigation bar"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["navigation bar"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox113Props = useStore((state)=>state["navigation bar"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["navigation bar"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["navigation bar"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["navigation bar"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox112Props = useStore((state)=>state["navigation bar"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["navigation bar"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image79Props = useStore((state)=>state["navigation bar"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["navigation bar"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image80Props = useStore((state)=>state["navigation bar"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["navigation bar"]["Image80"]);
const Image80Cb = useImage80Cb()
const TextBox116Props = useStore((state)=>state["navigation bar"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["navigation bar"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["navigation bar"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["navigation bar"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox115Props = useStore((state)=>state["navigation bar"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["navigation bar"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Image81Props = useStore((state)=>state["navigation bar"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["navigation bar"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image82Props = useStore((state)=>state["navigation bar"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["navigation bar"]["Image82"]);
const Image82Cb = useImage82Cb()
const TextBox119Props = useStore((state)=>state["navigation bar"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["navigation bar"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["navigation bar"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["navigation bar"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox118Props = useStore((state)=>state["navigation bar"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["navigation bar"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Image83Props = useStore((state)=>state["navigation bar"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["navigation bar"]["Image83"]);
const Image83Cb = useImage83Cb()
const Image84Props = useStore((state)=>state["navigation bar"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["navigation bar"]["Image84"]);
const Image84Cb = useImage84Cb()
const Flex261Props = useStore((state)=>state["navigation bar"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["navigation bar"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Button10Props = useStore((state)=>state["navigation bar"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["navigation bar"]["Button10"]);
const Button10Cb = useButton10Cb()
const TextBox103Props = useStore((state)=>state["navigation bar"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["navigation bar"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["navigation bar"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["navigation bar"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["navigation bar"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["navigation bar"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const mng_blogsProps = useStore((state)=>state["navigation bar"]["mng_blogs"]);
const mng_blogsIoProps = useIoStore((state)=>state["navigation bar"]["mng_blogs"]);
const mng_blogsCb = usemng_blogsCb()
const mng_productProps = useStore((state)=>state["navigation bar"]["mng_product"]);
const mng_productIoProps = useIoStore((state)=>state["navigation bar"]["mng_product"]);
const mng_productCb = usemng_productCb()
const mng_featuresProps = useStore((state)=>state["navigation bar"]["mng_features"]);
const mng_featuresIoProps = useIoStore((state)=>state["navigation bar"]["mng_features"]);
const mng_featuresCb = usemng_featuresCb()
const mng_bottom_testimonialProps = useStore((state)=>state["navigation bar"]["mng_bottom_testimonial"]);
const mng_bottom_testimonialIoProps = useIoStore((state)=>state["navigation bar"]["mng_bottom_testimonial"]);
const mng_bottom_testimonialCb = usemng_bottom_testimonialCb()
const mng_top_testimonalProps = useStore((state)=>state["navigation bar"]["mng_top_testimonal"]);
const mng_top_testimonalIoProps = useIoStore((state)=>state["navigation bar"]["mng_top_testimonal"]);
const mng_top_testimonalCb = usemng_top_testimonalCb()
const mng_top_faqProps = useStore((state)=>state["navigation bar"]["mng_top_faq"]);
const mng_top_faqIoProps = useIoStore((state)=>state["navigation bar"]["mng_top_faq"]);
const mng_top_faqCb = usemng_top_faqCb()
const mng_bottom_faqProps = useStore((state)=>state["navigation bar"]["mng_bottom_faq"]);
const mng_bottom_faqIoProps = useIoStore((state)=>state["navigation bar"]["mng_bottom_faq"]);
const mng_bottom_faqCb = usemng_bottom_faqCb()
const mng_footerProps = useStore((state)=>state["navigation bar"]["mng_footer"]);
const mng_footerIoProps = useIoStore((state)=>state["navigation bar"]["mng_footer"]);
const mng_footerCb = usemng_footerCb()
const Image85Props = useStore((state)=>state["navigation bar"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["navigation bar"]["Image85"]);
const Image85Cb = useImage85Cb()
const Image86Props = useStore((state)=>state["navigation bar"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["navigation bar"]["Image86"]);
const Image86Cb = useImage86Cb()
const mng_coverProps = useStore((state)=>state["navigation bar"]["mng_cover"]);
const mng_coverIoProps = useIoStore((state)=>state["navigation bar"]["mng_cover"]);
const mng_coverCb = usemng_coverCb()

  return (<>
  <Flex1 className="p-navigation bar Navigation_bar bpt" {...Navigation_barProps} {...Navigation_barCb} {...Navigation_barIoProps}>
<Flex1 className="p-navigation bar mngnavbar bpt" {...mngnavbarProps} {...mngnavbarCb} {...mngnavbarIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Main_cover bpt" {...Main_coverProps} {...Main_coverCb} {...Main_coverIoProps}>
<Flex1 className="p-navigation bar mng_cover bpt" {...mng_coverProps} {...mng_coverCb} {...mng_coverIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Hero_section bpt" {...Hero_sectionProps} {...Hero_sectionCb} {...Hero_sectionIoProps}>
<Flex1 className="p-navigation bar mng_hero bpt" {...mng_heroProps} {...mng_heroCb} {...mng_heroIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Album_section bpt" {...Album_sectionProps} {...Album_sectionCb} {...Album_sectionIoProps}>
<Flex1 className="p-navigation bar mng_album bpt" {...mng_albumProps} {...mng_albumCb} {...mng_albumIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Slider_section bpt" {...Slider_sectionProps} {...Slider_sectionCb} {...Slider_sectionIoProps}>
<Flex1 className="p-navigation bar mng_slider bpt" {...mng_sliderProps} {...mng_sliderCb} {...mng_sliderIoProps}>
<Flex1 className="p-navigation bar whole_slider bpt" {...whole_sliderProps} {...whole_sliderCb} {...whole_sliderIoProps}>
<Flex1 className="p-navigation bar tops bpt" {...topsProps} {...topsCb} {...topsIoProps}>
<Flex1 className="p-navigation bar Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Flex1 className="p-navigation bar Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Div1 className="p-navigation bar Div86 bpt" {...Div86Props} {...Div86Cb} {...Div86IoProps}>
<TextBox1 className="p-navigation bar TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Div1>
<Flex1 className="p-navigation bar Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Div1 className="p-navigation bar Div85 bpt" {...Div85Props} {...Div85Cb} {...Div85IoProps}>
<TextBox1 className="p-navigation bar TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Div1>
<Div1 className="p-navigation bar Div84 bpt" {...Div84Props} {...Div84Cb} {...Div84IoProps}>
<TextBox1 className="p-navigation bar TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Div1>
</Flex1>
</Flex1>
<Flex1 className="p-navigation bar Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<Flex1 className="p-navigation bar Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Button1 className="p-navigation bar Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<Flex1 className="p-navigation bar Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-navigation bar bottoms bpt" {...bottomsProps} {...bottomsCb} {...bottomsIoProps}>
<Flex1 className="p-navigation bar Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Flex1 className="p-navigation bar Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex1 className="p-navigation bar Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Flex1 className="p-navigation bar Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<Flex1 className="p-navigation bar Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<Div1 className="p-navigation bar Div88 bpt" {...Div88Props} {...Div88Cb} {...Div88IoProps}>
<Image1 className="p-navigation bar Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-navigation bar Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Flex1 className="p-navigation bar Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<TextBox1 className="p-navigation bar TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<TextBox1 className="p-navigation bar TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Flex1 className="p-navigation bar Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox1 className="p-navigation bar TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<Div1 className="p-navigation bar Div87 bpt" {...Div87Props} {...Div87Cb} {...Div87IoProps}>
<Image1 className="p-navigation bar Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Div1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-navigation bar Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<Flex1 className="p-navigation bar Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Div1 className="p-navigation bar Div90 bpt" {...Div90Props} {...Div90Cb} {...Div90IoProps}>
<Image1 className="p-navigation bar Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-navigation bar Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Flex1 className="p-navigation bar Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<TextBox1 className="p-navigation bar TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<TextBox1 className="p-navigation bar TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<Flex1 className="p-navigation bar Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<TextBox1 className="p-navigation bar TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<Div1 className="p-navigation bar Div89 bpt" {...Div89Props} {...Div89Cb} {...Div89IoProps}>
<Image1 className="p-navigation bar Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
</Div1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-navigation bar Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Flex1 className="p-navigation bar Flex299 bpt" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<Div1 className="p-navigation bar Div92 bpt" {...Div92Props} {...Div92Cb} {...Div92IoProps}>
<Image1 className="p-navigation bar Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-navigation bar Flex298 bpt" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Flex1 className="p-navigation bar Flex297 bpt" {...Flex297Props} {...Flex297Cb} {...Flex297IoProps}>
<TextBox1 className="p-navigation bar TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<TextBox1 className="p-navigation bar TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<Flex1 className="p-navigation bar Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<TextBox1 className="p-navigation bar TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<Div1 className="p-navigation bar Div91 bpt" {...Div91Props} {...Div91Cb} {...Div91IoProps}>
<Image1 className="p-navigation bar Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Div1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-navigation bar Flex305 bpt" {...Flex305Props} {...Flex305Cb} {...Flex305IoProps}>
<Flex1 className="p-navigation bar Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<Div1 className="p-navigation bar Div94 bpt" {...Div94Props} {...Div94Cb} {...Div94IoProps}>
<Image1 className="p-navigation bar Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-navigation bar Flex303 bpt" {...Flex303Props} {...Flex303Cb} {...Flex303IoProps}>
<Flex1 className="p-navigation bar Flex302 bpt" {...Flex302Props} {...Flex302Cb} {...Flex302IoProps}>
<TextBox1 className="p-navigation bar TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<TextBox1 className="p-navigation bar TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<Flex1 className="p-navigation bar Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}>
<TextBox1 className="p-navigation bar TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Div1 className="p-navigation bar Div93 bpt" {...Div93Props} {...Div93Cb} {...Div93IoProps}>
<Image1 className="p-navigation bar Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
</Div1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-navigation bar Flex310 bpt" {...Flex310Props} {...Flex310Cb} {...Flex310IoProps}>
<Flex1 className="p-navigation bar Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<Div1 className="p-navigation bar Div96 bpt" {...Div96Props} {...Div96Cb} {...Div96IoProps}>
<Image1 className="p-navigation bar Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
</Div1>
</Flex1>
<Flex1 className="p-navigation bar Flex308 bpt" {...Flex308Props} {...Flex308Cb} {...Flex308IoProps}>
<Flex1 className="p-navigation bar Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<TextBox1 className="p-navigation bar TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox1 className="p-navigation bar TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<Flex1 className="p-navigation bar Flex306 bpt" {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<TextBox1 className="p-navigation bar TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Div1 className="p-navigation bar Div95 bpt" {...Div95Props} {...Div95Cb} {...Div95IoProps}>
<Image1 className="p-navigation bar Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
</Div1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-navigation bar Blogs_section bpt" {...Blogs_sectionProps} {...Blogs_sectionCb} {...Blogs_sectionIoProps}>
<Flex1 className="p-navigation bar mng_blogs bpt" {...mng_blogsProps} {...mng_blogsCb} {...mng_blogsIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Product_section bpt" {...Product_sectionProps} {...Product_sectionCb} {...Product_sectionIoProps}>
<Flex1 className="p-navigation bar mng_product bpt" {...mng_productProps} {...mng_productCb} {...mng_productIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Features_section bpt" {...Features_sectionProps} {...Features_sectionCb} {...Features_sectionIoProps}>
<Flex1 className="p-navigation bar mng_features bpt" {...mng_featuresProps} {...mng_featuresCb} {...mng_featuresIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar FAQ_section bpt" {...FAQ_sectionProps} {...FAQ_sectionCb} {...FAQ_sectionIoProps}>
<Flex1 className="p-navigation bar mng_top_faq bpt" {...mng_top_faqProps} {...mng_top_faqCb} {...mng_top_faqIoProps}/>
<Flex1 className="p-navigation bar mng_bottom_faq bpt" {...mng_bottom_faqProps} {...mng_bottom_faqCb} {...mng_bottom_faqIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Testimonial_section bpt" {...Testimonial_sectionProps} {...Testimonial_sectionCb} {...Testimonial_sectionIoProps}>
<Flex1 className="p-navigation bar mng_top_testimonal bpt" {...mng_top_testimonalProps} {...mng_top_testimonalCb} {...mng_top_testimonalIoProps}/>
<Flex1 className="p-navigation bar mng_bottom_testimonial bpt" {...mng_bottom_testimonialProps} {...mng_bottom_testimonialCb} {...mng_bottom_testimonialIoProps}/>
</Flex1>
<Flex1 className="p-navigation bar Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex1 className="p-navigation bar mng_footer bpt" {...mng_footerProps} {...mng_footerCb} {...mng_footerIoProps}/>
<Flex1 className="p-navigation bar Flex311 bpt" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<Image1 className="p-navigation bar Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<Image1 className="p-navigation bar Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
</Flex1>
</Flex1>
  </>);
}
