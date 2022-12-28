import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useNavbar_sectionCb, usemng_navbarCb, useheaderCb, usemg_headerCb, useHero_sectionCb, usemng_heroCb, usebottom_multiple_iconCb, useCover_sectionCb, usemng_coverCb, usecontentCb, useleft_content_textboxCb, usemng_content_textboxCb, usebold_content_textboxCb, usemini_textCb, usecover_linksCb, usecontent_buttonCb, usemng_cover_btnCb, useright_content_imgCb, useAlbum_sectionCb, usemng_albumCb, usetop_albumCb, usemng_serviceCb, useservice_containerCb, usebottom_albumCb, usealbum1Cb, usealbum_icon1Cb, usealbum1_mini_textboxCb, usealbum1_listCb, usealbum1_orderlist2Cb, usealbum1_orderlist_textbox2Cb, usealbum1_orderlist1Cb, usealbum1_orderlist_textbox_1Cb, usealbum1_orderlist3Cb, usealbum1_orderlist_textbox3Cb, usealbum2Cb, useFlex54Cb, useFlex51Cb, useDiv24Cb, useFlex52Cb, useDiv26Cb, useFlex53Cb, useDiv28Cb, useFlex55Cb, useFlex56Cb, usealbum3Cb, useFlex61Cb, useFlex58Cb, useDiv30Cb, useFlex59Cb, useDiv32Cb, useFlex60Cb, useDiv34Cb, useFlex62Cb, useFlex63Cb, useSlider_sectionCb, usemng_sliderCb, usetop_sliderCb, usemng_top_sliderCb, useleft_project_txtboxCb, usetop_project_textboxCb, usebottom_bold_textboxCb, usetop_project_bold_txtbox1Cb, usebottom_project_bold_txtbox2Cb, useright_project_btnCb, usemng_project_btnCb, usebottom_sliderCb, useFlex312Cb, useFlex344Cb, useFlex342Cb, useFlex341Cb, useFlex340Cb, useFlex343Cb, useDiv102Cb, useFlex349Cb, useFlex347Cb, useFlex376Cb, useFlex375Cb, useFlex348Cb, useDiv103Cb, useFlex364Cb, useFlex362Cb, useFlex361Cb, useFlex360Cb, useFlex363Cb, useDiv106Cb, useFlex383Cb, useFlex381Cb, useDiv109Cb, useFlex382Cb, useFlex380Cb, useFlex379Cb, useFlex393Cb, useFlex391Cb, useDiv111Cb, useFlex392Cb, useFlex390Cb, useFlex389Cb, useFlex394Cb, useFlex395Cb, useFlex396Cb, useFlex338Cb, useFlex397Cb, useFlex399Cb, useFlex401Cb, useFlex402Cb, useFlex403Cb, useFlex404Cb, useFlex400Cb, useFlex405Cb, useFlex410Cb, useFlex411Cb, useFlex412Cb, useFlex416Cb, useFlex413Cb, useFlex414Cb, useFlex415Cb, useFlex420Cb, useFlex417Cb, useFlex418Cb, useFlex419Cb, useFlex424Cb, useFlex421Cb, useFlex422Cb, useFlex423Cb, useFlex425Cb, useFlex426Cb, useFlex431Cb, useFlex433Cb, useFlex435Cb, useDiv112Cb, useDiv113Cb, useFlex434Cb, uselogoCb, usearrow_icon1Cb, useaboutCb, useservicesCb, useprojectCb, useblogCb, usebookcallCb, usetop_trusted_byCb, useicon1Cb, useicon2Cb, useicon3Cb, useicon4Cb, usebold__text1Cb, usebold_text2Cb, useTextBox24Cb, usecover_download_linkCb, usearrow_icon2Cb, useback_btnCb, usecover_buttonCb, usecover_imgCb, usebottom_bold_service_textboxCb, usetop_service_textboxCb, usealbum1_bold_txtCb, useImage14Cb, usealbum1_mini_txtCb, usealbum1_circle2Cb, usealbum1_orderlist_textCb, usealbum1_circle1Cb, useTextBox30Cb, usealbum1_circle3Cb, usealbum1_orderlist_text3Cb, useTextBox37Cb, useDiv25Cb, useTextBox33Cb, useDiv27Cb, useTextBox34Cb, useDiv29Cb, useTextBox35Cb, useTextBox36Cb, useImage15Cb, useTextBox42Cb, useDiv31Cb, useTextBox38Cb, useDiv33Cb, useTextBox39Cb, useDiv35Cb, useTextBox40Cb, useTextBox41Cb, useImage16Cb, useproject_txtCb, useproject_bold_text1Cb, useproject_bold_text2Cb, useproject_buttonCb, useproject_back_btnCb, useTextBox135Cb, useTextBox136Cb, useTextBox134Cb, useImage91Cb, useImage92Cb, useTextBox156Cb, useTextBox157Cb, useImage105Cb, useTextBox155Cb, useImage94Cb, useTextBox147Cb, useTextBox148Cb, useTextBox146Cb, useImage99Cb, useImage100Cb, useImage108Cb, useTextBox162Cb, useTextBox163Cb, useImage107Cb, useTextBox161Cb, useImage112Cb, useTextBox168Cb, useTextBox169Cb, useTextBox167Cb, useImage111Cb, useImage113Cb, useImage114Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useImage115Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useImage116Cb, useImage117Cb, useTextBox182Cb, useTextBox183Cb, useTextBox184Cb, useImage118Cb, useTextBox185Cb, useTextBox186Cb, useTextBox187Cb, useImage119Cb, useTextBox188Cb, useTextBox189Cb, useTextBox190Cb, useFlex432Cb, useTextBox191Cb, useTextBox192Cb, useTextBox193Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
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

  const Navbar_sectionProps = useStore((state)=>state["Home"]["Navbar_section"]);
const Navbar_sectionIoProps = useIoStore((state)=>state["Home"]["Navbar_section"]);
const Navbar_sectionCb = useNavbar_sectionCb()
const mng_navbarProps = useStore((state)=>state["Home"]["mng_navbar"]);
const mng_navbarIoProps = useIoStore((state)=>state["Home"]["mng_navbar"]);
const mng_navbarCb = usemng_navbarCb()
const headerProps = useStore((state)=>state["Home"]["header"]);
const headerIoProps = useIoStore((state)=>state["Home"]["header"]);
const headerCb = useheaderCb()
const mg_headerProps = useStore((state)=>state["Home"]["mg_header"]);
const mg_headerIoProps = useIoStore((state)=>state["Home"]["mg_header"]);
const mg_headerCb = usemg_headerCb()
const Hero_sectionProps = useStore((state)=>state["Home"]["Hero_section"]);
const Hero_sectionIoProps = useIoStore((state)=>state["Home"]["Hero_section"]);
const Hero_sectionCb = useHero_sectionCb()
const mng_heroProps = useStore((state)=>state["Home"]["mng_hero"]);
const mng_heroIoProps = useIoStore((state)=>state["Home"]["mng_hero"]);
const mng_heroCb = usemng_heroCb()
const bottom_multiple_iconProps = useStore((state)=>state["Home"]["bottom_multiple_icon"]);
const bottom_multiple_iconIoProps = useIoStore((state)=>state["Home"]["bottom_multiple_icon"]);
const bottom_multiple_iconCb = usebottom_multiple_iconCb()
const Cover_sectionProps = useStore((state)=>state["Home"]["Cover_section"]);
const Cover_sectionIoProps = useIoStore((state)=>state["Home"]["Cover_section"]);
const Cover_sectionCb = useCover_sectionCb()
const mng_coverProps = useStore((state)=>state["Home"]["mng_cover"]);
const mng_coverIoProps = useIoStore((state)=>state["Home"]["mng_cover"]);
const mng_coverCb = usemng_coverCb()
const contentProps = useStore((state)=>state["Home"]["content"]);
const contentIoProps = useIoStore((state)=>state["Home"]["content"]);
const contentCb = usecontentCb()
const left_content_textboxProps = useStore((state)=>state["Home"]["left_content_textbox"]);
const left_content_textboxIoProps = useIoStore((state)=>state["Home"]["left_content_textbox"]);
const left_content_textboxCb = useleft_content_textboxCb()
const mng_content_textboxProps = useStore((state)=>state["Home"]["mng_content_textbox"]);
const mng_content_textboxIoProps = useIoStore((state)=>state["Home"]["mng_content_textbox"]);
const mng_content_textboxCb = usemng_content_textboxCb()
const bold_content_textboxProps = useStore((state)=>state["Home"]["bold_content_textbox"]);
const bold_content_textboxIoProps = useIoStore((state)=>state["Home"]["bold_content_textbox"]);
const bold_content_textboxCb = usebold_content_textboxCb()
const mini_textProps = useStore((state)=>state["Home"]["mini_text"]);
const mini_textIoProps = useIoStore((state)=>state["Home"]["mini_text"]);
const mini_textCb = usemini_textCb()
const cover_linksProps = useStore((state)=>state["Home"]["cover_links"]);
const cover_linksIoProps = useIoStore((state)=>state["Home"]["cover_links"]);
const cover_linksCb = usecover_linksCb()
const content_buttonProps = useStore((state)=>state["Home"]["content_button"]);
const content_buttonIoProps = useIoStore((state)=>state["Home"]["content_button"]);
const content_buttonCb = usecontent_buttonCb()
const mng_cover_btnProps = useStore((state)=>state["Home"]["mng_cover_btn"]);
const mng_cover_btnIoProps = useIoStore((state)=>state["Home"]["mng_cover_btn"]);
const mng_cover_btnCb = usemng_cover_btnCb()
const right_content_imgProps = useStore((state)=>state["Home"]["right_content_img"]);
const right_content_imgIoProps = useIoStore((state)=>state["Home"]["right_content_img"]);
const right_content_imgCb = useright_content_imgCb()
const Album_sectionProps = useStore((state)=>state["Home"]["Album_section"]);
const Album_sectionIoProps = useIoStore((state)=>state["Home"]["Album_section"]);
const Album_sectionCb = useAlbum_sectionCb()
const mng_albumProps = useStore((state)=>state["Home"]["mng_album"]);
const mng_albumIoProps = useIoStore((state)=>state["Home"]["mng_album"]);
const mng_albumCb = usemng_albumCb()
const top_albumProps = useStore((state)=>state["Home"]["top_album"]);
const top_albumIoProps = useIoStore((state)=>state["Home"]["top_album"]);
const top_albumCb = usetop_albumCb()
const mng_serviceProps = useStore((state)=>state["Home"]["mng_service"]);
const mng_serviceIoProps = useIoStore((state)=>state["Home"]["mng_service"]);
const mng_serviceCb = usemng_serviceCb()
const service_containerProps = useStore((state)=>state["Home"]["service_container"]);
const service_containerIoProps = useIoStore((state)=>state["Home"]["service_container"]);
const service_containerCb = useservice_containerCb()
const bottom_albumProps = useStore((state)=>state["Home"]["bottom_album"]);
const bottom_albumIoProps = useIoStore((state)=>state["Home"]["bottom_album"]);
const bottom_albumCb = usebottom_albumCb()
const album1Props = useStore((state)=>state["Home"]["album1"]);
const album1IoProps = useIoStore((state)=>state["Home"]["album1"]);
const album1Cb = usealbum1Cb()
const album_icon1Props = useStore((state)=>state["Home"]["album_icon1"]);
const album_icon1IoProps = useIoStore((state)=>state["Home"]["album_icon1"]);
const album_icon1Cb = usealbum_icon1Cb()
const album1_mini_textboxProps = useStore((state)=>state["Home"]["album1_mini_textbox"]);
const album1_mini_textboxIoProps = useIoStore((state)=>state["Home"]["album1_mini_textbox"]);
const album1_mini_textboxCb = usealbum1_mini_textboxCb()
const album1_listProps = useStore((state)=>state["Home"]["album1_list"]);
const album1_listIoProps = useIoStore((state)=>state["Home"]["album1_list"]);
const album1_listCb = usealbum1_listCb()
const album1_orderlist2Props = useStore((state)=>state["Home"]["album1_orderlist2"]);
const album1_orderlist2IoProps = useIoStore((state)=>state["Home"]["album1_orderlist2"]);
const album1_orderlist2Cb = usealbum1_orderlist2Cb()
const album1_orderlist_textbox2Props = useStore((state)=>state["Home"]["album1_orderlist_textbox2"]);
const album1_orderlist_textbox2IoProps = useIoStore((state)=>state["Home"]["album1_orderlist_textbox2"]);
const album1_orderlist_textbox2Cb = usealbum1_orderlist_textbox2Cb()
const album1_orderlist1Props = useStore((state)=>state["Home"]["album1_orderlist1"]);
const album1_orderlist1IoProps = useIoStore((state)=>state["Home"]["album1_orderlist1"]);
const album1_orderlist1Cb = usealbum1_orderlist1Cb()
const album1_orderlist_textbox_1Props = useStore((state)=>state["Home"]["album1_orderlist_textbox_1"]);
const album1_orderlist_textbox_1IoProps = useIoStore((state)=>state["Home"]["album1_orderlist_textbox_1"]);
const album1_orderlist_textbox_1Cb = usealbum1_orderlist_textbox_1Cb()
const album1_orderlist3Props = useStore((state)=>state["Home"]["album1_orderlist3"]);
const album1_orderlist3IoProps = useIoStore((state)=>state["Home"]["album1_orderlist3"]);
const album1_orderlist3Cb = usealbum1_orderlist3Cb()
const album1_orderlist_textbox3Props = useStore((state)=>state["Home"]["album1_orderlist_textbox3"]);
const album1_orderlist_textbox3IoProps = useIoStore((state)=>state["Home"]["album1_orderlist_textbox3"]);
const album1_orderlist_textbox3Cb = usealbum1_orderlist_textbox3Cb()
const album2Props = useStore((state)=>state["Home"]["album2"]);
const album2IoProps = useIoStore((state)=>state["Home"]["album2"]);
const album2Cb = usealbum2Cb()
const Flex54Props = useStore((state)=>state["Home"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Home"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const album3Props = useStore((state)=>state["Home"]["album3"]);
const album3IoProps = useIoStore((state)=>state["Home"]["album3"]);
const album3Cb = usealbum3Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Slider_sectionProps = useStore((state)=>state["Home"]["Slider_section"]);
const Slider_sectionIoProps = useIoStore((state)=>state["Home"]["Slider_section"]);
const Slider_sectionCb = useSlider_sectionCb()
const mng_sliderProps = useStore((state)=>state["Home"]["mng_slider"]);
const mng_sliderIoProps = useIoStore((state)=>state["Home"]["mng_slider"]);
const mng_sliderCb = usemng_sliderCb()
const top_sliderProps = useStore((state)=>state["Home"]["top_slider"]);
const top_sliderIoProps = useIoStore((state)=>state["Home"]["top_slider"]);
const top_sliderCb = usetop_sliderCb()
const mng_top_sliderProps = useStore((state)=>state["Home"]["mng_top_slider"]);
const mng_top_sliderIoProps = useIoStore((state)=>state["Home"]["mng_top_slider"]);
const mng_top_sliderCb = usemng_top_sliderCb()
const left_project_txtboxProps = useStore((state)=>state["Home"]["left_project_txtbox"]);
const left_project_txtboxIoProps = useIoStore((state)=>state["Home"]["left_project_txtbox"]);
const left_project_txtboxCb = useleft_project_txtboxCb()
const top_project_textboxProps = useStore((state)=>state["Home"]["top_project_textbox"]);
const top_project_textboxIoProps = useIoStore((state)=>state["Home"]["top_project_textbox"]);
const top_project_textboxCb = usetop_project_textboxCb()
const bottom_bold_textboxProps = useStore((state)=>state["Home"]["bottom_bold_textbox"]);
const bottom_bold_textboxIoProps = useIoStore((state)=>state["Home"]["bottom_bold_textbox"]);
const bottom_bold_textboxCb = usebottom_bold_textboxCb()
const top_project_bold_txtbox1Props = useStore((state)=>state["Home"]["top_project_bold_txtbox1"]);
const top_project_bold_txtbox1IoProps = useIoStore((state)=>state["Home"]["top_project_bold_txtbox1"]);
const top_project_bold_txtbox1Cb = usetop_project_bold_txtbox1Cb()
const bottom_project_bold_txtbox2Props = useStore((state)=>state["Home"]["bottom_project_bold_txtbox2"]);
const bottom_project_bold_txtbox2IoProps = useIoStore((state)=>state["Home"]["bottom_project_bold_txtbox2"]);
const bottom_project_bold_txtbox2Cb = usebottom_project_bold_txtbox2Cb()
const right_project_btnProps = useStore((state)=>state["Home"]["right_project_btn"]);
const right_project_btnIoProps = useIoStore((state)=>state["Home"]["right_project_btn"]);
const right_project_btnCb = useright_project_btnCb()
const mng_project_btnProps = useStore((state)=>state["Home"]["mng_project_btn"]);
const mng_project_btnIoProps = useIoStore((state)=>state["Home"]["mng_project_btn"]);
const mng_project_btnCb = usemng_project_btnCb()
const bottom_sliderProps = useStore((state)=>state["Home"]["bottom_slider"]);
const bottom_sliderIoProps = useIoStore((state)=>state["Home"]["bottom_slider"]);
const bottom_sliderCb = usebottom_sliderCb()
const Flex312Props = useStore((state)=>state["Home"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["Home"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const Flex344Props = useStore((state)=>state["Home"]["Flex344"]);
const Flex344IoProps = useIoStore((state)=>state["Home"]["Flex344"]);
const Flex344Cb = useFlex344Cb()
const Flex342Props = useStore((state)=>state["Home"]["Flex342"]);
const Flex342IoProps = useIoStore((state)=>state["Home"]["Flex342"]);
const Flex342Cb = useFlex342Cb()
const Flex341Props = useStore((state)=>state["Home"]["Flex341"]);
const Flex341IoProps = useIoStore((state)=>state["Home"]["Flex341"]);
const Flex341Cb = useFlex341Cb()
const Flex340Props = useStore((state)=>state["Home"]["Flex340"]);
const Flex340IoProps = useIoStore((state)=>state["Home"]["Flex340"]);
const Flex340Cb = useFlex340Cb()
const Flex343Props = useStore((state)=>state["Home"]["Flex343"]);
const Flex343IoProps = useIoStore((state)=>state["Home"]["Flex343"]);
const Flex343Cb = useFlex343Cb()
const Div102Props = useStore((state)=>state["Home"]["Div102"]);
const Div102IoProps = useIoStore((state)=>state["Home"]["Div102"]);
const Div102Cb = useDiv102Cb()
const Flex349Props = useStore((state)=>state["Home"]["Flex349"]);
const Flex349IoProps = useIoStore((state)=>state["Home"]["Flex349"]);
const Flex349Cb = useFlex349Cb()
const Flex347Props = useStore((state)=>state["Home"]["Flex347"]);
const Flex347IoProps = useIoStore((state)=>state["Home"]["Flex347"]);
const Flex347Cb = useFlex347Cb()
const Flex376Props = useStore((state)=>state["Home"]["Flex376"]);
const Flex376IoProps = useIoStore((state)=>state["Home"]["Flex376"]);
const Flex376Cb = useFlex376Cb()
const Flex375Props = useStore((state)=>state["Home"]["Flex375"]);
const Flex375IoProps = useIoStore((state)=>state["Home"]["Flex375"]);
const Flex375Cb = useFlex375Cb()
const Flex348Props = useStore((state)=>state["Home"]["Flex348"]);
const Flex348IoProps = useIoStore((state)=>state["Home"]["Flex348"]);
const Flex348Cb = useFlex348Cb()
const Div103Props = useStore((state)=>state["Home"]["Div103"]);
const Div103IoProps = useIoStore((state)=>state["Home"]["Div103"]);
const Div103Cb = useDiv103Cb()
const Flex364Props = useStore((state)=>state["Home"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["Home"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const Flex362Props = useStore((state)=>state["Home"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["Home"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const Flex361Props = useStore((state)=>state["Home"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["Home"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const Flex360Props = useStore((state)=>state["Home"]["Flex360"]);
const Flex360IoProps = useIoStore((state)=>state["Home"]["Flex360"]);
const Flex360Cb = useFlex360Cb()
const Flex363Props = useStore((state)=>state["Home"]["Flex363"]);
const Flex363IoProps = useIoStore((state)=>state["Home"]["Flex363"]);
const Flex363Cb = useFlex363Cb()
const Div106Props = useStore((state)=>state["Home"]["Div106"]);
const Div106IoProps = useIoStore((state)=>state["Home"]["Div106"]);
const Div106Cb = useDiv106Cb()
const Flex383Props = useStore((state)=>state["Home"]["Flex383"]);
const Flex383IoProps = useIoStore((state)=>state["Home"]["Flex383"]);
const Flex383Cb = useFlex383Cb()
const Flex381Props = useStore((state)=>state["Home"]["Flex381"]);
const Flex381IoProps = useIoStore((state)=>state["Home"]["Flex381"]);
const Flex381Cb = useFlex381Cb()
const Div109Props = useStore((state)=>state["Home"]["Div109"]);
const Div109IoProps = useIoStore((state)=>state["Home"]["Div109"]);
const Div109Cb = useDiv109Cb()
const Flex382Props = useStore((state)=>state["Home"]["Flex382"]);
const Flex382IoProps = useIoStore((state)=>state["Home"]["Flex382"]);
const Flex382Cb = useFlex382Cb()
const Flex380Props = useStore((state)=>state["Home"]["Flex380"]);
const Flex380IoProps = useIoStore((state)=>state["Home"]["Flex380"]);
const Flex380Cb = useFlex380Cb()
const Flex379Props = useStore((state)=>state["Home"]["Flex379"]);
const Flex379IoProps = useIoStore((state)=>state["Home"]["Flex379"]);
const Flex379Cb = useFlex379Cb()
const Flex393Props = useStore((state)=>state["Home"]["Flex393"]);
const Flex393IoProps = useIoStore((state)=>state["Home"]["Flex393"]);
const Flex393Cb = useFlex393Cb()
const Flex391Props = useStore((state)=>state["Home"]["Flex391"]);
const Flex391IoProps = useIoStore((state)=>state["Home"]["Flex391"]);
const Flex391Cb = useFlex391Cb()
const Div111Props = useStore((state)=>state["Home"]["Div111"]);
const Div111IoProps = useIoStore((state)=>state["Home"]["Div111"]);
const Div111Cb = useDiv111Cb()
const Flex392Props = useStore((state)=>state["Home"]["Flex392"]);
const Flex392IoProps = useIoStore((state)=>state["Home"]["Flex392"]);
const Flex392Cb = useFlex392Cb()
const Flex390Props = useStore((state)=>state["Home"]["Flex390"]);
const Flex390IoProps = useIoStore((state)=>state["Home"]["Flex390"]);
const Flex390Cb = useFlex390Cb()
const Flex389Props = useStore((state)=>state["Home"]["Flex389"]);
const Flex389IoProps = useIoStore((state)=>state["Home"]["Flex389"]);
const Flex389Cb = useFlex389Cb()
const Flex394Props = useStore((state)=>state["Home"]["Flex394"]);
const Flex394IoProps = useIoStore((state)=>state["Home"]["Flex394"]);
const Flex394Cb = useFlex394Cb()
const Flex395Props = useStore((state)=>state["Home"]["Flex395"]);
const Flex395IoProps = useIoStore((state)=>state["Home"]["Flex395"]);
const Flex395Cb = useFlex395Cb()
const Flex396Props = useStore((state)=>state["Home"]["Flex396"]);
const Flex396IoProps = useIoStore((state)=>state["Home"]["Flex396"]);
const Flex396Cb = useFlex396Cb()
const Flex338Props = useStore((state)=>state["Home"]["Flex338"]);
const Flex338IoProps = useIoStore((state)=>state["Home"]["Flex338"]);
const Flex338Cb = useFlex338Cb()
const Flex397Props = useStore((state)=>state["Home"]["Flex397"]);
const Flex397IoProps = useIoStore((state)=>state["Home"]["Flex397"]);
const Flex397Cb = useFlex397Cb()
const Flex399Props = useStore((state)=>state["Home"]["Flex399"]);
const Flex399IoProps = useIoStore((state)=>state["Home"]["Flex399"]);
const Flex399Cb = useFlex399Cb()
const Flex401Props = useStore((state)=>state["Home"]["Flex401"]);
const Flex401IoProps = useIoStore((state)=>state["Home"]["Flex401"]);
const Flex401Cb = useFlex401Cb()
const Flex402Props = useStore((state)=>state["Home"]["Flex402"]);
const Flex402IoProps = useIoStore((state)=>state["Home"]["Flex402"]);
const Flex402Cb = useFlex402Cb()
const Flex403Props = useStore((state)=>state["Home"]["Flex403"]);
const Flex403IoProps = useIoStore((state)=>state["Home"]["Flex403"]);
const Flex403Cb = useFlex403Cb()
const Flex404Props = useStore((state)=>state["Home"]["Flex404"]);
const Flex404IoProps = useIoStore((state)=>state["Home"]["Flex404"]);
const Flex404Cb = useFlex404Cb()
const Flex400Props = useStore((state)=>state["Home"]["Flex400"]);
const Flex400IoProps = useIoStore((state)=>state["Home"]["Flex400"]);
const Flex400Cb = useFlex400Cb()
const Flex405Props = useStore((state)=>state["Home"]["Flex405"]);
const Flex405IoProps = useIoStore((state)=>state["Home"]["Flex405"]);
const Flex405Cb = useFlex405Cb()
const Flex410Props = useStore((state)=>state["Home"]["Flex410"]);
const Flex410IoProps = useIoStore((state)=>state["Home"]["Flex410"]);
const Flex410Cb = useFlex410Cb()
const Flex411Props = useStore((state)=>state["Home"]["Flex411"]);
const Flex411IoProps = useIoStore((state)=>state["Home"]["Flex411"]);
const Flex411Cb = useFlex411Cb()
const Flex412Props = useStore((state)=>state["Home"]["Flex412"]);
const Flex412IoProps = useIoStore((state)=>state["Home"]["Flex412"]);
const Flex412Cb = useFlex412Cb()
const Flex416Props = useStore((state)=>state["Home"]["Flex416"]);
const Flex416IoProps = useIoStore((state)=>state["Home"]["Flex416"]);
const Flex416Cb = useFlex416Cb()
const Flex413Props = useStore((state)=>state["Home"]["Flex413"]);
const Flex413IoProps = useIoStore((state)=>state["Home"]["Flex413"]);
const Flex413Cb = useFlex413Cb()
const Flex414Props = useStore((state)=>state["Home"]["Flex414"]);
const Flex414IoProps = useIoStore((state)=>state["Home"]["Flex414"]);
const Flex414Cb = useFlex414Cb()
const Flex415Props = useStore((state)=>state["Home"]["Flex415"]);
const Flex415IoProps = useIoStore((state)=>state["Home"]["Flex415"]);
const Flex415Cb = useFlex415Cb()
const Flex420Props = useStore((state)=>state["Home"]["Flex420"]);
const Flex420IoProps = useIoStore((state)=>state["Home"]["Flex420"]);
const Flex420Cb = useFlex420Cb()
const Flex417Props = useStore((state)=>state["Home"]["Flex417"]);
const Flex417IoProps = useIoStore((state)=>state["Home"]["Flex417"]);
const Flex417Cb = useFlex417Cb()
const Flex418Props = useStore((state)=>state["Home"]["Flex418"]);
const Flex418IoProps = useIoStore((state)=>state["Home"]["Flex418"]);
const Flex418Cb = useFlex418Cb()
const Flex419Props = useStore((state)=>state["Home"]["Flex419"]);
const Flex419IoProps = useIoStore((state)=>state["Home"]["Flex419"]);
const Flex419Cb = useFlex419Cb()
const Flex424Props = useStore((state)=>state["Home"]["Flex424"]);
const Flex424IoProps = useIoStore((state)=>state["Home"]["Flex424"]);
const Flex424Cb = useFlex424Cb()
const Flex421Props = useStore((state)=>state["Home"]["Flex421"]);
const Flex421IoProps = useIoStore((state)=>state["Home"]["Flex421"]);
const Flex421Cb = useFlex421Cb()
const Flex422Props = useStore((state)=>state["Home"]["Flex422"]);
const Flex422IoProps = useIoStore((state)=>state["Home"]["Flex422"]);
const Flex422Cb = useFlex422Cb()
const Flex423Props = useStore((state)=>state["Home"]["Flex423"]);
const Flex423IoProps = useIoStore((state)=>state["Home"]["Flex423"]);
const Flex423Cb = useFlex423Cb()
const Flex425Props = useStore((state)=>state["Home"]["Flex425"]);
const Flex425IoProps = useIoStore((state)=>state["Home"]["Flex425"]);
const Flex425Cb = useFlex425Cb()
const Flex426Props = useStore((state)=>state["Home"]["Flex426"]);
const Flex426IoProps = useIoStore((state)=>state["Home"]["Flex426"]);
const Flex426Cb = useFlex426Cb()
const Flex431Props = useStore((state)=>state["Home"]["Flex431"]);
const Flex431IoProps = useIoStore((state)=>state["Home"]["Flex431"]);
const Flex431Cb = useFlex431Cb()
const Flex433Props = useStore((state)=>state["Home"]["Flex433"]);
const Flex433IoProps = useIoStore((state)=>state["Home"]["Flex433"]);
const Flex433Cb = useFlex433Cb()
const Flex435Props = useStore((state)=>state["Home"]["Flex435"]);
const Flex435IoProps = useIoStore((state)=>state["Home"]["Flex435"]);
const Flex435Cb = useFlex435Cb()
const Div112Props = useStore((state)=>state["Home"]["Div112"]);
const Div112IoProps = useIoStore((state)=>state["Home"]["Div112"]);
const Div112Cb = useDiv112Cb()
const Div113Props = useStore((state)=>state["Home"]["Div113"]);
const Div113IoProps = useIoStore((state)=>state["Home"]["Div113"]);
const Div113Cb = useDiv113Cb()
const Flex434Props = useStore((state)=>state["Home"]["Flex434"]);
const Flex434IoProps = useIoStore((state)=>state["Home"]["Flex434"]);
const Flex434Cb = useFlex434Cb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const arrow_icon1Props = useStore((state)=>state["Home"]["arrow_icon1"]);
const arrow_icon1IoProps = useIoStore((state)=>state["Home"]["arrow_icon1"]);
const arrow_icon1Cb = usearrow_icon1Cb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const servicesProps = useStore((state)=>state["Home"]["services"]);
const servicesIoProps = useIoStore((state)=>state["Home"]["services"]);
const servicesCb = useservicesCb()
const projectProps = useStore((state)=>state["Home"]["project"]);
const projectIoProps = useIoStore((state)=>state["Home"]["project"]);
const projectCb = useprojectCb()
const blogProps = useStore((state)=>state["Home"]["blog"]);
const blogIoProps = useIoStore((state)=>state["Home"]["blog"]);
const blogCb = useblogCb()
const bookcallProps = useStore((state)=>state["Home"]["bookcall"]);
const bookcallIoProps = useIoStore((state)=>state["Home"]["bookcall"]);
const bookcallCb = usebookcallCb()
const top_trusted_byProps = useStore((state)=>state["Home"]["top_trusted_by"]);
const top_trusted_byIoProps = useIoStore((state)=>state["Home"]["top_trusted_by"]);
const top_trusted_byCb = usetop_trusted_byCb()
const icon1Props = useStore((state)=>state["Home"]["icon1"]);
const icon1IoProps = useIoStore((state)=>state["Home"]["icon1"]);
const icon1Cb = useicon1Cb()
const icon2Props = useStore((state)=>state["Home"]["icon2"]);
const icon2IoProps = useIoStore((state)=>state["Home"]["icon2"]);
const icon2Cb = useicon2Cb()
const icon3Props = useStore((state)=>state["Home"]["icon3"]);
const icon3IoProps = useIoStore((state)=>state["Home"]["icon3"]);
const icon3Cb = useicon3Cb()
const icon4Props = useStore((state)=>state["Home"]["icon4"]);
const icon4IoProps = useIoStore((state)=>state["Home"]["icon4"]);
const icon4Cb = useicon4Cb()
const bold__text1Props = useStore((state)=>state["Home"]["bold__text1"]);
const bold__text1IoProps = useIoStore((state)=>state["Home"]["bold__text1"]);
const bold__text1Cb = usebold__text1Cb()
const bold_text2Props = useStore((state)=>state["Home"]["bold_text2"]);
const bold_text2IoProps = useIoStore((state)=>state["Home"]["bold_text2"]);
const bold_text2Cb = usebold_text2Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const cover_download_linkProps = useStore((state)=>state["Home"]["cover_download_link"]);
const cover_download_linkIoProps = useIoStore((state)=>state["Home"]["cover_download_link"]);
const cover_download_linkCb = usecover_download_linkCb()
const arrow_icon2Props = useStore((state)=>state["Home"]["arrow_icon2"]);
const arrow_icon2IoProps = useIoStore((state)=>state["Home"]["arrow_icon2"]);
const arrow_icon2Cb = usearrow_icon2Cb()
const back_btnProps = useStore((state)=>state["Home"]["back_btn"]);
const back_btnIoProps = useIoStore((state)=>state["Home"]["back_btn"]);
const back_btnCb = useback_btnCb()
const cover_buttonProps = useStore((state)=>state["Home"]["cover_button"]);
const cover_buttonIoProps = useIoStore((state)=>state["Home"]["cover_button"]);
const cover_buttonCb = usecover_buttonCb()
const cover_imgProps = useStore((state)=>state["Home"]["cover_img"]);
const cover_imgIoProps = useIoStore((state)=>state["Home"]["cover_img"]);
const cover_imgCb = usecover_imgCb()
const bottom_bold_service_textboxProps = useStore((state)=>state["Home"]["bottom_bold_service_textbox"]);
const bottom_bold_service_textboxIoProps = useIoStore((state)=>state["Home"]["bottom_bold_service_textbox"]);
const bottom_bold_service_textboxCb = usebottom_bold_service_textboxCb()
const top_service_textboxProps = useStore((state)=>state["Home"]["top_service_textbox"]);
const top_service_textboxIoProps = useIoStore((state)=>state["Home"]["top_service_textbox"]);
const top_service_textboxCb = usetop_service_textboxCb()
const album1_bold_txtProps = useStore((state)=>state["Home"]["album1_bold_txt"]);
const album1_bold_txtIoProps = useIoStore((state)=>state["Home"]["album1_bold_txt"]);
const album1_bold_txtCb = usealbum1_bold_txtCb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const album1_mini_txtProps = useStore((state)=>state["Home"]["album1_mini_txt"]);
const album1_mini_txtIoProps = useIoStore((state)=>state["Home"]["album1_mini_txt"]);
const album1_mini_txtCb = usealbum1_mini_txtCb()
const album1_circle2Props = useStore((state)=>state["Home"]["album1_circle2"]);
const album1_circle2IoProps = useIoStore((state)=>state["Home"]["album1_circle2"]);
const album1_circle2Cb = usealbum1_circle2Cb()
const album1_orderlist_textProps = useStore((state)=>state["Home"]["album1_orderlist_text"]);
const album1_orderlist_textIoProps = useIoStore((state)=>state["Home"]["album1_orderlist_text"]);
const album1_orderlist_textCb = usealbum1_orderlist_textCb()
const album1_circle1Props = useStore((state)=>state["Home"]["album1_circle1"]);
const album1_circle1IoProps = useIoStore((state)=>state["Home"]["album1_circle1"]);
const album1_circle1Cb = usealbum1_circle1Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const album1_circle3Props = useStore((state)=>state["Home"]["album1_circle3"]);
const album1_circle3IoProps = useIoStore((state)=>state["Home"]["album1_circle3"]);
const album1_circle3Cb = usealbum1_circle3Cb()
const album1_orderlist_text3Props = useStore((state)=>state["Home"]["album1_orderlist_text3"]);
const album1_orderlist_text3IoProps = useIoStore((state)=>state["Home"]["album1_orderlist_text3"]);
const album1_orderlist_text3Cb = usealbum1_orderlist_text3Cb()
const TextBox37Props = useStore((state)=>state["Home"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Home"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Div31Props = useStore((state)=>state["Home"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Home"]["Div31"]);
const Div31Cb = useDiv31Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Div33Props = useStore((state)=>state["Home"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Home"]["Div33"]);
const Div33Cb = useDiv33Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const project_txtProps = useStore((state)=>state["Home"]["project_txt"]);
const project_txtIoProps = useIoStore((state)=>state["Home"]["project_txt"]);
const project_txtCb = useproject_txtCb()
const project_bold_text1Props = useStore((state)=>state["Home"]["project_bold_text1"]);
const project_bold_text1IoProps = useIoStore((state)=>state["Home"]["project_bold_text1"]);
const project_bold_text1Cb = useproject_bold_text1Cb()
const project_bold_text2Props = useStore((state)=>state["Home"]["project_bold_text2"]);
const project_bold_text2IoProps = useIoStore((state)=>state["Home"]["project_bold_text2"]);
const project_bold_text2Cb = useproject_bold_text2Cb()
const project_buttonProps = useStore((state)=>state["Home"]["project_button"]);
const project_buttonIoProps = useIoStore((state)=>state["Home"]["project_button"]);
const project_buttonCb = useproject_buttonCb()
const project_back_btnProps = useStore((state)=>state["Home"]["project_back_btn"]);
const project_back_btnIoProps = useIoStore((state)=>state["Home"]["project_back_btn"]);
const project_back_btnCb = useproject_back_btnCb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const Image91Props = useStore((state)=>state["Home"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["Home"]["Image91"]);
const Image91Cb = useImage91Cb()
const Image92Props = useStore((state)=>state["Home"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home"]["Image92"]);
const Image92Cb = useImage92Cb()
const TextBox156Props = useStore((state)=>state["Home"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Home"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Home"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Home"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const Image105Props = useStore((state)=>state["Home"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["Home"]["Image105"]);
const Image105Cb = useImage105Cb()
const TextBox155Props = useStore((state)=>state["Home"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Home"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const Image94Props = useStore((state)=>state["Home"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Home"]["Image94"]);
const Image94Cb = useImage94Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const Image99Props = useStore((state)=>state["Home"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["Home"]["Image99"]);
const Image99Cb = useImage99Cb()
const Image100Props = useStore((state)=>state["Home"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["Home"]["Image100"]);
const Image100Cb = useImage100Cb()
const Image108Props = useStore((state)=>state["Home"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Home"]["Image108"]);
const Image108Cb = useImage108Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image107Props = useStore((state)=>state["Home"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Home"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Image112Props = useStore((state)=>state["Home"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["Home"]["Image112"]);
const Image112Cb = useImage112Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Image111Props = useStore((state)=>state["Home"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["Home"]["Image111"]);
const Image111Cb = useImage111Cb()
const Image113Props = useStore((state)=>state["Home"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["Home"]["Image113"]);
const Image113Cb = useImage113Cb()
const Image114Props = useStore((state)=>state["Home"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["Home"]["Image114"]);
const Image114Cb = useImage114Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image115Props = useStore((state)=>state["Home"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["Home"]["Image115"]);
const Image115Cb = useImage115Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const Image116Props = useStore((state)=>state["Home"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["Home"]["Image116"]);
const Image116Cb = useImage116Cb()
const Image117Props = useStore((state)=>state["Home"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Home"]["Image117"]);
const Image117Cb = useImage117Cb()
const TextBox182Props = useStore((state)=>state["Home"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Home"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["Home"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Home"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["Home"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Home"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const Image118Props = useStore((state)=>state["Home"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Home"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox185Props = useStore((state)=>state["Home"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Home"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["Home"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Home"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["Home"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["Home"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const Image119Props = useStore((state)=>state["Home"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Home"]["Image119"]);
const Image119Cb = useImage119Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const Flex432Props = useStore((state)=>state["Home"]["Flex432"]);
const Flex432IoProps = useIoStore((state)=>state["Home"]["Flex432"]);
const Flex432Cb = useFlex432Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["Home"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()

  return (<>
  <Flex className="p-Home Navbar_section bpt" {...Navbar_sectionProps} {...Navbar_sectionCb} {...Navbar_sectionIoProps}>
<Flex className="p-Home mng_navbar bpt" {...mng_navbarProps} {...mng_navbarCb} {...mng_navbarIoProps}>
<Image className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}/>
<Flex className="p-Home header bpt" {...headerProps} {...headerCb} {...headerIoProps}>
<Flex className="p-Home mg_header bpt" {...mg_headerProps} {...mg_headerCb} {...mg_headerIoProps}>
<Link className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}/>
<Link className="p-Home services bpt" {...servicesProps} {...servicesCb} {...servicesIoProps}/>
<Link className="p-Home project bpt" {...projectProps} {...projectCb} {...projectIoProps}/>
<Link className="p-Home blog bpt" {...blogProps} {...blogCb} {...blogIoProps}/>
<Link className="p-Home bookcall bpt" {...bookcallProps} {...bookcallCb} {...bookcallIoProps}/>
<Image className="p-Home arrow_icon1 bpt" {...arrow_icon1Props} {...arrow_icon1Cb} {...arrow_icon1IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Cover_section bpt" {...Cover_sectionProps} {...Cover_sectionCb} {...Cover_sectionIoProps}>
<Flex className="p-Home mng_cover bpt" {...mng_coverProps} {...mng_coverCb} {...mng_coverIoProps}>
<Flex className="p-Home content bpt" {...contentProps} {...contentCb} {...contentIoProps}>
<Flex className="p-Home left_content_textbox bpt" {...left_content_textboxProps} {...left_content_textboxCb} {...left_content_textboxIoProps}>
<Flex className="p-Home mng_content_textbox bpt" {...mng_content_textboxProps} {...mng_content_textboxCb} {...mng_content_textboxIoProps}>
<Flex className="p-Home bold_content_textbox bpt" {...bold_content_textboxProps} {...bold_content_textboxCb} {...bold_content_textboxIoProps}>
<TextBox className="p-Home bold__text1 bpt" {...bold__text1Props} {...bold__text1Cb} {...bold__text1IoProps}/>
<TextBox className="p-Home bold_text2 bpt" {...bold_text2Props} {...bold_text2Cb} {...bold_text2IoProps}/>
</Flex>
<Div className="p-Home mini_text bpt" {...mini_textProps} {...mini_textCb} {...mini_textIoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Div>
<Div className="p-Home cover_links bpt" {...cover_linksProps} {...cover_linksCb} {...cover_linksIoProps}>
<Flex className="p-Home content_button bpt" {...content_buttonProps} {...content_buttonCb} {...content_buttonIoProps}>
<Flex className="p-Home mng_cover_btn bpt" {...mng_cover_btnProps} {...mng_cover_btnCb} {...mng_cover_btnIoProps}>
<Button className="p-Home cover_button bpt" {...cover_buttonProps} {...cover_buttonCb} {...cover_buttonIoProps}/>
<Flex className="p-Home back_btn bpt" {...back_btnProps} {...back_btnCb} {...back_btnIoProps}/>
</Flex>
<Link className="p-Home cover_download_link bpt" {...cover_download_linkProps} {...cover_download_linkCb} {...cover_download_linkIoProps}/>
<Image className="p-Home arrow_icon2 bpt" {...arrow_icon2Props} {...arrow_icon2Cb} {...arrow_icon2IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
<Flex className="p-Home right_content_img bpt" {...right_content_imgProps} {...right_content_imgCb} {...right_content_imgIoProps}>
<Image className="p-Home cover_img bpt" {...cover_imgProps} {...cover_imgCb} {...cover_imgIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Hero_section bpt" {...Hero_sectionProps} {...Hero_sectionCb} {...Hero_sectionIoProps}>
<Flex className="p-Home mng_hero bpt" {...mng_heroProps} {...mng_heroCb} {...mng_heroIoProps}>
<TextBox className="p-Home top_trusted_by bpt" {...top_trusted_byProps} {...top_trusted_byCb} {...top_trusted_byIoProps}/>
<Flex className="p-Home bottom_multiple_icon bpt" {...bottom_multiple_iconProps} {...bottom_multiple_iconCb} {...bottom_multiple_iconIoProps}>
<Image className="p-Home icon1 bpt" {...icon1Props} {...icon1Cb} {...icon1IoProps}/>
<Image className="p-Home icon2 bpt" {...icon2Props} {...icon2Cb} {...icon2IoProps}/>
<Image className="p-Home icon3 bpt" {...icon3Props} {...icon3Cb} {...icon3IoProps}/>
<Image className="p-Home icon4 bpt" {...icon4Props} {...icon4Cb} {...icon4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Album_section bpt" {...Album_sectionProps} {...Album_sectionCb} {...Album_sectionIoProps}>
<Flex className="p-Home mng_album bpt" {...mng_albumProps} {...mng_albumCb} {...mng_albumIoProps}>
<Flex className="p-Home top_album bpt" {...top_albumProps} {...top_albumCb} {...top_albumIoProps}>
<Flex className="p-Home mng_service bpt" {...mng_serviceProps} {...mng_serviceCb} {...mng_serviceIoProps}>
<Div className="p-Home service_container bpt" {...service_containerProps} {...service_containerCb} {...service_containerIoProps}>
<TextBox className="p-Home top_service_textbox bpt" {...top_service_textboxProps} {...top_service_textboxCb} {...top_service_textboxIoProps}/>
</Div>
<TextBox className="p-Home bottom_bold_service_textbox bpt" {...bottom_bold_service_textboxProps} {...bottom_bold_service_textboxCb} {...bottom_bold_service_textboxIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home bottom_album bpt" {...bottom_albumProps} {...bottom_albumCb} {...bottom_albumIoProps}>
<Flex className="p-Home album1 bpt" {...album1Props} {...album1Cb} {...album1IoProps}>
<Flex className="p-Home album_icon1 bpt" {...album_icon1Props} {...album_icon1Cb} {...album_icon1IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex>
<TextBox className="p-Home album1_bold_txt bpt" {...album1_bold_txtProps} {...album1_bold_txtCb} {...album1_bold_txtIoProps}/>
<Flex className="p-Home album1_mini_textbox bpt" {...album1_mini_textboxProps} {...album1_mini_textboxCb} {...album1_mini_textboxIoProps}>
<TextBox className="p-Home album1_mini_txt bpt" {...album1_mini_txtProps} {...album1_mini_txtCb} {...album1_mini_txtIoProps}/>
</Flex>
<Flex className="p-Home album1_list bpt" {...album1_listProps} {...album1_listCb} {...album1_listIoProps}>
<Flex className="p-Home album1_orderlist1 bpt" {...album1_orderlist1Props} {...album1_orderlist1Cb} {...album1_orderlist1IoProps}>
<Div className="p-Home album1_circle1 bpt" {...album1_circle1Props} {...album1_circle1Cb} {...album1_circle1IoProps}/>
<Div className="p-Home album1_orderlist_textbox_1 bpt" {...album1_orderlist_textbox_1Props} {...album1_orderlist_textbox_1Cb} {...album1_orderlist_textbox_1IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Div>
</Flex>
<Flex className="p-Home album1_orderlist2 bpt" {...album1_orderlist2Props} {...album1_orderlist2Cb} {...album1_orderlist2IoProps}>
<Div className="p-Home album1_circle2 bpt" {...album1_circle2Props} {...album1_circle2Cb} {...album1_circle2IoProps}/>
<Div className="p-Home album1_orderlist_textbox2 bpt" {...album1_orderlist_textbox2Props} {...album1_orderlist_textbox2Cb} {...album1_orderlist_textbox2IoProps}>
<TextBox className="p-Home album1_orderlist_text bpt" {...album1_orderlist_textProps} {...album1_orderlist_textCb} {...album1_orderlist_textIoProps}/>
</Div>
</Flex>
<Flex className="p-Home album1_orderlist3 bpt" {...album1_orderlist3Props} {...album1_orderlist3Cb} {...album1_orderlist3IoProps}>
<Div className="p-Home album1_circle3 bpt" {...album1_circle3Props} {...album1_circle3Cb} {...album1_circle3IoProps}/>
<Div className="p-Home album1_orderlist_textbox3 bpt" {...album1_orderlist_textbox3Props} {...album1_orderlist_textbox3Cb} {...album1_orderlist_textbox3IoProps}>
<TextBox className="p-Home album1_orderlist_text3 bpt" {...album1_orderlist_text3Props} {...album1_orderlist_text3Cb} {...album1_orderlist_text3IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home album2 bpt" {...album2Props} {...album2Cb} {...album2IoProps}>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
</Flex>
<TextBox className="p-Home TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
</Flex>
<Flex className="p-Home Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}/>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}/>
<Div className="p-Home Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}/>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home album3 bpt" {...album3Props} {...album3Cb} {...album3IoProps}>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
</Flex>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Div className="p-Home Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}/>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<TextBox className="p-Home TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Div className="p-Home Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}/>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Div className="p-Home Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}/>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Slider_section bpt" {...Slider_sectionProps} {...Slider_sectionCb} {...Slider_sectionIoProps}>
<Flex className="p-Home mng_slider bpt" {...mng_sliderProps} {...mng_sliderCb} {...mng_sliderIoProps}>
<Flex className="p-Home top_slider bpt" {...top_sliderProps} {...top_sliderCb} {...top_sliderIoProps}>
<Flex className="p-Home mng_top_slider bpt" {...mng_top_sliderProps} {...mng_top_sliderCb} {...mng_top_sliderIoProps}>
<Flex className="p-Home left_project_txtbox bpt" {...left_project_txtboxProps} {...left_project_txtboxCb} {...left_project_txtboxIoProps}>
<Div className="p-Home top_project_textbox bpt" {...top_project_textboxProps} {...top_project_textboxCb} {...top_project_textboxIoProps}>
<TextBox className="p-Home project_txt bpt" {...project_txtProps} {...project_txtCb} {...project_txtIoProps}/>
</Div>
<Flex className="p-Home bottom_bold_textbox bpt" {...bottom_bold_textboxProps} {...bottom_bold_textboxCb} {...bottom_bold_textboxIoProps}>
<Div className="p-Home top_project_bold_txtbox1 bpt" {...top_project_bold_txtbox1Props} {...top_project_bold_txtbox1Cb} {...top_project_bold_txtbox1IoProps}>
<TextBox className="p-Home project_bold_text1 bpt" {...project_bold_text1Props} {...project_bold_text1Cb} {...project_bold_text1IoProps}/>
</Div>
<Div className="p-Home bottom_project_bold_txtbox2 bpt" {...bottom_project_bold_txtbox2Props} {...bottom_project_bold_txtbox2Cb} {...bottom_project_bold_txtbox2IoProps}>
<TextBox className="p-Home project_bold_text2 bpt" {...project_bold_text2Props} {...project_bold_text2Cb} {...project_bold_text2IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home right_project_btn bpt" {...right_project_btnProps} {...right_project_btnCb} {...right_project_btnIoProps}>
<Flex className="p-Home mng_project_btn bpt" {...mng_project_btnProps} {...mng_project_btnCb} {...mng_project_btnIoProps}>
<Button className="p-Home project_button bpt" {...project_buttonProps} {...project_buttonCb} {...project_buttonIoProps}/>
<Flex className="p-Home project_back_btn bpt" {...project_back_btnProps} {...project_back_btnCb} {...project_back_btnIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home bottom_slider bpt" {...bottom_sliderProps} {...bottom_sliderCb} {...bottom_sliderIoProps}>
<Flex className="p-Home Flex312 bpt" {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<Flex className="p-Home Flex393 bpt" {...Flex393Props} {...Flex393Cb} {...Flex393IoProps}>
<Flex className="p-Home Flex391 bpt" {...Flex391Props} {...Flex391Cb} {...Flex391IoProps}>
<Div className="p-Home Div111 bpt" {...Div111Props} {...Div111Cb} {...Div111IoProps}>
<Image className="p-Home Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex392 bpt" {...Flex392Props} {...Flex392Cb} {...Flex392IoProps}>
<Flex className="p-Home Flex390 bpt" {...Flex390Props} {...Flex390Cb} {...Flex390IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<Flex className="p-Home Flex389 bpt" {...Flex389Props} {...Flex389Cb} {...Flex389IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<Image className="p-Home Image111 bpt" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex364 bpt" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<Flex className="p-Home Flex363 bpt" {...Flex363Props} {...Flex363Cb} {...Flex363IoProps}>
<Div className="p-Home Div106 bpt" {...Div106Props} {...Div106Cb} {...Div106IoProps}>
<Image className="p-Home Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<Flex className="p-Home Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<TextBox className="p-Home TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<Flex className="p-Home Flex360 bpt" {...Flex360Props} {...Flex360Cb} {...Flex360IoProps}>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<Image className="p-Home Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex383 bpt" {...Flex383Props} {...Flex383Cb} {...Flex383IoProps}>
<Flex className="p-Home Flex381 bpt" {...Flex381Props} {...Flex381Cb} {...Flex381IoProps}>
<Div className="p-Home Div109 bpt" {...Div109Props} {...Div109Cb} {...Div109IoProps}>
<Image className="p-Home Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex382 bpt" {...Flex382Props} {...Flex382Cb} {...Flex382IoProps}>
<Flex className="p-Home Flex380 bpt" {...Flex380Props} {...Flex380Cb} {...Flex380IoProps}>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<Flex className="p-Home Flex379 bpt" {...Flex379Props} {...Flex379Cb} {...Flex379IoProps}>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<Image className="p-Home Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex344 bpt" {...Flex344Props} {...Flex344Cb} {...Flex344IoProps}>
<Flex className="p-Home Flex343 bpt" {...Flex343Props} {...Flex343Cb} {...Flex343IoProps}>
<Div className="p-Home Div102 bpt" {...Div102Props} {...Div102Cb} {...Div102IoProps}>
<Image className="p-Home Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex342 bpt" {...Flex342Props} {...Flex342Cb} {...Flex342IoProps}>
<Flex className="p-Home Flex341 bpt" {...Flex341Props} {...Flex341Cb} {...Flex341IoProps}>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<Flex className="p-Home Flex340 bpt" {...Flex340Props} {...Flex340Cb} {...Flex340IoProps}>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<Image className="p-Home Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex349 bpt" {...Flex349Props} {...Flex349Cb} {...Flex349IoProps}>
<Flex className="p-Home Flex348 bpt" {...Flex348Props} {...Flex348Cb} {...Flex348IoProps}>
<Div className="p-Home Div103 bpt" {...Div103Props} {...Div103Cb} {...Div103IoProps}>
<Image className="p-Home Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex347 bpt" {...Flex347Props} {...Flex347Cb} {...Flex347IoProps}>
<Flex className="p-Home Flex376 bpt" {...Flex376Props} {...Flex376Cb} {...Flex376IoProps}>
<TextBox className="p-Home TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox className="p-Home TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<Flex className="p-Home Flex375 bpt" {...Flex375Props} {...Flex375Cb} {...Flex375IoProps}>
<TextBox className="p-Home TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<Image className="p-Home Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex394 bpt" {...Flex394Props} {...Flex394Cb} {...Flex394IoProps}>
<Flex className="p-Home Flex395 bpt" {...Flex395Props} {...Flex395Cb} {...Flex395IoProps}>
<Image className="p-Home Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex>
<Flex className="p-Home Flex396 bpt" {...Flex396Props} {...Flex396Cb} {...Flex396IoProps}>
<Image className="p-Home Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex338 bpt" {...Flex338Props} {...Flex338Cb} {...Flex338IoProps}>
<Flex className="p-Home Flex397 bpt" {...Flex397Props} {...Flex397Cb} {...Flex397IoProps}>
<Flex className="p-Home Flex399 bpt" {...Flex399Props} {...Flex399Cb} {...Flex399IoProps}>
<Flex className="p-Home Flex401 bpt" {...Flex401Props} {...Flex401Cb} {...Flex401IoProps}>
<Flex className="p-Home Flex402 bpt" {...Flex402Props} {...Flex402Cb} {...Flex402IoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
<Flex className="p-Home Flex403 bpt" {...Flex403Props} {...Flex403Cb} {...Flex403IoProps}>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex>
<Flex className="p-Home Flex404 bpt" {...Flex404Props} {...Flex404Cb} {...Flex404IoProps}>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<Image className="p-Home Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex400 bpt" {...Flex400Props} {...Flex400Cb} {...Flex400IoProps}>
<Flex className="p-Home Flex405 bpt" {...Flex405Props} {...Flex405Cb} {...Flex405IoProps}>
<Flex className="p-Home Flex410 bpt" {...Flex410Props} {...Flex410Cb} {...Flex410IoProps}>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Flex>
<Flex className="p-Home Flex411 bpt" {...Flex411Props} {...Flex411Cb} {...Flex411IoProps}>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex>
<Flex className="p-Home Flex412 bpt" {...Flex412Props} {...Flex412Cb} {...Flex412IoProps}>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
<Image className="p-Home Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex416 bpt" {...Flex416Props} {...Flex416Cb} {...Flex416IoProps}>
<Flex className="p-Home Flex415 bpt" {...Flex415Props} {...Flex415Cb} {...Flex415IoProps}>
<TextBox className="p-Home TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
</Flex>
<Flex className="p-Home Flex414 bpt" {...Flex414Props} {...Flex414Cb} {...Flex414IoProps}>
<TextBox className="p-Home TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
</Flex>
<Flex className="p-Home Flex413 bpt" {...Flex413Props} {...Flex413Cb} {...Flex413IoProps}>
<TextBox className="p-Home TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<Image className="p-Home Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex420 bpt" {...Flex420Props} {...Flex420Cb} {...Flex420IoProps}>
<Flex className="p-Home Flex419 bpt" {...Flex419Props} {...Flex419Cb} {...Flex419IoProps}>
<TextBox className="p-Home TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
</Flex>
<Flex className="p-Home Flex418 bpt" {...Flex418Props} {...Flex418Cb} {...Flex418IoProps}>
<TextBox className="p-Home TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
</Flex>
<Flex className="p-Home Flex417 bpt" {...Flex417Props} {...Flex417Cb} {...Flex417IoProps}>
<TextBox className="p-Home TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<Image className="p-Home Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex424 bpt" {...Flex424Props} {...Flex424Cb} {...Flex424IoProps}>
<Flex className="p-Home Flex423 bpt" {...Flex423Props} {...Flex423Cb} {...Flex423IoProps}>
<TextBox className="p-Home TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
</Flex>
<Flex className="p-Home Flex422 bpt" {...Flex422Props} {...Flex422Cb} {...Flex422IoProps}>
<TextBox className="p-Home TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
</Flex>
<Flex className="p-Home Flex421 bpt" {...Flex421Props} {...Flex421Cb} {...Flex421IoProps}>
<TextBox className="p-Home TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<Image className="p-Home Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex425 bpt" {...Flex425Props} {...Flex425Cb} {...Flex425IoProps}>
<Flex className="p-Home Flex426 bpt" {...Flex426Props} {...Flex426Cb} {...Flex426IoProps}>
<Flex className="p-Home Flex431 bpt" {...Flex431Props} {...Flex431Cb} {...Flex431IoProps}>
<Flex className="p-Home Flex433 bpt" {...Flex433Props} {...Flex433Cb} {...Flex433IoProps}>
<Flex className="p-Home Flex435 bpt" {...Flex435Props} {...Flex435Cb} {...Flex435IoProps}>
<Div className="p-Home Div112 bpt" {...Div112Props} {...Div112Cb} {...Div112IoProps}>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
</Div>
<Div className="p-Home Div113 bpt" {...Div113Props} {...Div113Cb} {...Div113IoProps}>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home Flex434 bpt" {...Flex434Props} {...Flex434Cb} {...Flex434IoProps}>
<TextBox className="p-Home TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex432 bpt" {...Flex432Props} {...Flex432Cb} {...Flex432IoProps}/>
</Flex>
</Flex>
  </>);
}
