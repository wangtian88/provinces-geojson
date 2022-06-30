/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('黑龙江', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":230100,"name":"哈尔滨市","center":[126.642464,45.756967],"centroid":[127.966759,45.648633],"childrenNum":18,"level":"city","parent":{"adcode":230000},"subFeatureIndex":0,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@cY±I\\YS[dEYTOBkREG_oA]~]SS^GnqCUnL\\]xUCkVQvBlcb@sLRQv@U[^aD^NQT_fGHl[JZjRtOPNV[vXFbhKGTbhN[^dI|tlPUjV¬JLPlQ|\\®apWFYoA@QElaLojBZX\\_d\\dQ¢LTYXRjMOUZIDbIlmRggUMdKfXCDuaow@oOmuHcg}\\¹«UZgCY]ZKXqvJnOzHhK_a¢Y\\xIÒEe^B°iNWMZsiUYayNmAiYTcUWb}hMPYmyDUfI^YDgin}|_^a@g}^LwdTjv@^K°wr^IfgrPfIp¶Lj\\rA¤|aXFVwTV\\l@@XC@`_THTwFATr\\Z^id_@QnPX[Rbjx_KxNVYrlpÊ`\\tBBNm\\FZ¨rPEP°plEptZ^|H[Àbv[dJjG~_¾RfJRt{TlJxLb¢LlTSNfr]BrZJhphlQtV`@vnzLhYjFevVJObYEUrhHTnW\\IzsNYbh`GfOLbr`z@bVqPE`iHHrxfP\\lArTnfQZTpoHF\\_`a`FdYfmVth¦\\hChH§dI\\q`brEvRVak@Sbj~KXH|gSpDXL@hUXPbJZVWPGrL^¾FTP[n~Vn_fnIJCFZdBx\\RX_ftZU`nXlUfbg´p¢UpVWz^PYp`BXcdQxuCShGZLbetX¬Fb[dRvE^X\\AW°\\nGhVJ@n[JH^r@\\zvVcd]Hgz{`Gl_jy^]A~Aj{R_KI^cBEZsd¦\\`OvA`LoXPLfEpjLpbDT~qxNXAr¨jxMPwUOU{IWq^q@iTqhcMCR@K`lNTVFrbj]Cc_qXB[g}cNgjag_»y£N{ClEnzTSILA@mHgeTJNen§T×Uok_@kkQPcSoTy]iJWj[D_oo[mÃtJEPC}[Sm«\\k]»EIzRtKjmNAV³CqZOijPfImTaiaWL£HyGXUIYEuTGyYgd_YgGH]@IVi@WX@¥dvsHGST_O{|qM[_ã{_T¯sogEg\\HQTGºo|eJa\\qB[f«NEY]YN­QemcSyIFUE]BW]EK_SQUcB­kWF[JQuSBQaaB[_sJSesR}y}[LWuQI]k_NqCkyw»gÍ£Eq}@UPHk}§AgZ{G\\SeG@UjgQ|l_^mIubA^V¤ER{OMbzYRWWUWfSH]_UVkGwDmcRUOShkGRoOePD_[oIedYmyO£h]bD]OEgw]AW^ouOaNsEPmAmiQg}g_a]VU_D_j"]],"encodeOffsets":[[[128780,46625]]]}},{"type":"Feature","properties":{"adcode":230200,"name":"齐齐哈尔市","center":[123.95792,47.342081],"centroid":[124.557904,47.710767],"childrenNum":16,"level":"city","parent":{"adcode":230000},"subFeatureIndex":1,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@GHe]M`OKiYYA[]DuOSuTsV§SSOEyg]EkYIB_gD{o~m_aN^UmbiK¡ziKmdUjw_MO[roaSJYWKSqs[J[]QdI@Yq_FcwuEMS]FPf^PCZJIxX\\±PARR{LJjQzcTgrNVU\\dPW^MtZCFfujAdX|_f^a]Ãq±sď×Ó³UGyù½y_£¡eĭÑoMw_É§aUçm©e¥qaóuï»×W¹oeW}Mwcs[g§BgbcjSLqq«GEtwgl}|Q|ehHXOxCrWAbS~NH[SWcwJYO_paM_VI F|dbFJKo]Cj}APgXEPiZJ~cxSG[XenSFPTTPzSRlG^\\Pr|ZLKhRbKTL@pgR_VÎCz]HEZwh±ME]}J[MvPdzOVPKSYw½~i¤@ZhM`R~z@I{r]OQU^YAGOLMANWS_ŉEěQ£_AMUPY]_mFsnçUHS_CQIP§KP¥@õîÿ©j|HJOvEPWBxKvmnlAnUpTnbxSd]dBJS|PRdÂNVGBhRZG~NÀIV^_f@Xt`SbNVchqZ\\jy\\\\\\A\\iHITxAbWRKd]JMf}fZnQ~xfgz¢DJKNF£zUxhtPfIlppL@~cTJ`GlgHAbXNHrv^FnlNn[~ÔFbeRbpĠVGÒJsXXQ^rTJKldPdIbXAgBÈCCUc`E¬tÒv®v\\t®N\\ZÔtTZïø@@WŪ@R\\IOÚAÊN DƈdAĦTŦ`ǾfɌtLj^F®MT`]XlF\\\\aF]^CúI DB|MlJfvrN^UNiTHHxtpt^ORN~[Æ_AUV`JKdlVK`LXZ§lalGlmhaEN÷uH}M]]yFApXHMeR]lZC[MbĕQ¥rk@XDnC\\JoeìYZdFK`A¢JcG]RaGR¢^BGYS^dKtZATjFLXt@eèdIbLfv£^SV¯e|kBaeUoIeq@µ¦QFQeQ¿[wSiqsOKwS_RĕÅ·A@[iHcfëQpyUkPK¡pnXEnV^S|kK¥ZaI³TdCRF£O"]],"encodeOffsets":[[[127745,50099]]]}},{"type":"Feature","properties":{"adcode":230300,"name":"鸡西市","center":[130.975966,45.300046],"centroid":[132.297639,45.635227],"childrenNum":9,"level":"city","parent":{"adcode":230000},"subFeatureIndex":2,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@C_SWJ@hSMXOiD_\\QUs@KuUSDc_Iq£yFgXUZ·_HSkJcgkWuCYkcUckVAhÃQofYccPUf¥YGV¹NKf]`MKÇYFiWm]sp_]OLDOMqA__kXw[o}DwysGNg_gmQgi«ga]AaiaAcfo_wgOqVajMDYgB[oCIS\\MPyXDPezMdU^j²tgBQcBYpqJedW`Pz}¢T@^|\\pE`Y~FJmªGWPlMhufZØLrUxbZhKRVpJZWEFcN\\PXUfRffDhtN`btW~Ppa~K|JNZ]``pFVZzbDVnPxlVbQfcAeT²bBndiCQhH^THIbrPnzCLQVfQxEdc~OŰȂ­ƘǞĈi®{z@@QTTVhAnpVHdFAxQhRJ[cZBjWIDbZBYb\\bGjl^Ubv^DExzXCnbxphJnZErR`TrMTXSV@jb@`^fWNZm\\NVHHZYlXcKr~NBTcNDntETV\\BpHErbCHnjTvOde`AJjhVBZ]^Z^JhOZhGjdr^xAV]pFplP¤RrHl^XbQD]`GdrZLWbHRvYldzsEyVHlVnVR\\e|yl§HEtjpBTMhqO]VsJ¯EW[m^uFkVY©PI}ia\\D^SduGyeq`eE\\V`YbuVYQYOQaVUMwWCI_ZY_iµQ}j{]PqgUWab_m]O]gDyMQ_P]WsGJQskLW±YHaoEYU[X{HIWqHG`cDaWQ]kPSqYk@e£FYo[Gq]I»JCCqa^yc[nqOOCmioJSw]E{^_¡AEO³c±HBThF`_h[GycQImIcbYguCZ^Ad_`ZhWhFx"]],"encodeOffsets":[[[134952,47006]]]}},{"type":"Feature","properties":{"adcode":230400,"name":"鹤岗市","center":[130.277487,47.332085],"centroid":[130.807059,47.644529],"childrenNum":8,"level":"city","parent":{"adcode":230000},"subFeatureIndex":3,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@kW@UDESMS[eP[QIqNeSOXYhkRg]mVOawAI]HGwS\\UQ[kS^ICkYyh[]_WH¡@UJ§y}EWncPklYF¥zIrunrYZkN_OBmouEiavkKyJc]SJYyiEO_^UOWJOOgBOoÇFFqTMAgrGH]_mZ_HY_\\OFfE@rC`iÀ_eHQ[e@g~sWYGocOJMMSeP]GsiTSM|[a]dwaDyYgGBmepkdG_MDi@MW¤_UJtF|STgbMAÊcdmB£v[dgjUl@RSIU IxF[xRjKGlDXLvOpDObbBhdhI~O^NghUA[p{^JR}X]leXBZÀV¶Ox_êqºLŎlSSVa]U^QHk{SRièImtNPb~P@mWÈOtPtxÚjb`MBP|WK@VM\\DzCÔRTC^JdjR\\V]PH²lpLZVLEºnFLf p^VbvRxªC`rXZlezBX¦Tdt¯T©hhyDeIiao{OJ§SÏCwDTqEUwg[oFX¯SiBë|yJoIuumaeIDmlQ_VóXeAYEJ¡FK­}ÉY@¥JfchIĂ¸g`×wX^OchJ|z²An~Rz_~UV`"]],"encodeOffsets":[[[133924,49518]]]}},{"type":"Feature","properties":{"adcode":230500,"name":"双鸭山市","center":[131.157304,46.643442],"centroid":[132.623042,46.721849],"childrenNum":8,"level":"city","parent":{"adcode":230000},"subFeatureIndex":4,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@LĒBĎJ\\DÖA@@HČ©FBgWCCa]UkBg_YHq£dKF]W]LY{k@cwWTMuADMSLQmMSsiBg`Z]cP{¥B@eV¹cj¥KX[H¡B@NyA·kkGg_iO^wF\\­µ¡Û»{HčeCGe_MC}[SEeWC@wcW|]EgeJ[Md]QJ_lHFoDhQoBQWcEXQqWXYYGVogGaJK[O]JQoEKeL[§KsQVM[eNk@tCfklKmSkRYODkEiP]V§JTJJw^£ZgO}\\^JKtaVIjtRnMlj\\sVCñd·NAZŇE]WÛaC¯vEB]Á@YEBhsBA[sFnǙHJĸj¾]FßO«@Gǉ»}@ąSWp[X{icfÏO×AR}bDWY^QwCDU_AJk}GM\\u][cSZ_IDWOXAH_dWO]L_bMeyMspu\\RBri^EzV¢@_x¡KMRc¢_PQWiAsvUNLOhH`gQpTfO¢Yi¸[dgªytOfNªBRUpGZYjP^QFDKB]vV¢[`BLsyaBPuÄmLUrRG®rb@hYa_Spki@aK]yKA[ecEwXgYg`_BcY]vDZhdanJJdRHz\\`gE_gAS²G´dFP¢B`|]^FTxIjpDnPPmrd\\]zbDrDI¼Jr^\\HZpEf¤l@rZOT^lRbXdCH_rGJX|G\\WZVpFGb²ZKXtlIRHXtO^R`NzhCP^n^a`XbhVOr|^~i¶R`jYZJ`XDNxUVRb PRZZvUZaU_[fFr_zfvHTcC]b[~jJªOZlUvEn]X\\°FtI^UrPNgjbj´jnbdb²E~Pjj hlB\\TDbftYtBddpC`n|`NClRV~GZBgz«hàtjJxhFj¤hLæBRB"]],"encodeOffsets":[[[137727,48589]]]}},{"type":"Feature","properties":{"adcode":230600,"name":"大庆市","center":[125.11272,46.590734],"centroid":[124.705742,46.357625],"childrenNum":9,"level":"city","parent":{"adcode":230000},"subFeatureIndex":5,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@JP[Qũ@@X÷@ðYSÓs[Y­M[s­uÑu«s_FdDVÇDABhaWcJcOLkSIqR]WWtIÑHğUoafQaÓE\\}Mmmk]EuGqWMBahGHk_SId@}oKkoeJsOwgyVE¤MIL¡ChyweR}Ym~eNe^ILcXQBawJSjGB[[[z[[irYdgMUTas_@W`e]JUBXqS]hOd|pHP][[HavgugfkAezBNW[aj[isbQJ[MgpWNiYQmJYYnSEaKW_Ly~w´_ViDoWJYve{csEMUZkD{BgWDW_SpGB_aYd]MdTUQodOnBJQW]H[~_®PTETaapp]^C\\X~NpAvYZIhVTaB^Q~r`@Fw^GfX@v]hDH\\KrpLjtSLwSBrÅIHYmWH]lClPrhhBWºfxAt]`jwl@|lQx°BdcªbVpljDnYzN²JdZ]~PPWvlbPUtRP]TdBAnjQNRrOpj·¦uGCp¬KCV^DIpµCWfLjSAWÔɳmƊ]ÔS|ÇWZIMxsHolSGzDqZuMjiKÉ|WxJdÐPwW]¥yW^j^QVMXdUb¡GYKE¯i{fR^VRpo¸TªTKjlZÊNJjD¸CIRrFSrX^Ejg^{R¦^t\\FbSäFNK­yAJg~OvNlat}jrVJXg`y@]KbZsfd`kZV¥cjvRPS´FJj|aFEfk@Ul_@mZ¤¦@bRFTÞĲÊ¦]B^s`°^fpZLBŞ"]],"encodeOffsets":[[[128341,48422]]]}},{"type":"Feature","properties":{"adcode":230700,"name":"伊春市","center":[128.899396,47.724775],"centroid":[129.224747,47.830729],"childrenNum":10,"level":"city","parent":{"adcode":230000},"subFeatureIndex":6,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@VJWzH¤GXKjbSbnJeOjiPrY´DBUnMLiQsJy¼Fl^¬[Tn~\\DFOIÄsnp\\`p\\CXijIz^STpOdlRl`@plØV¨SfmIMfShnGB@PF`¢pA`bXdCxRGfLb`Kv@MTCoV}MrebaDCtbXc\\_BI|¢UZn[v_\\fElTxFTKTZZfHT`QredFrOn~TB~NNAnPrbN~]hJr\\P£`NX@Cj`NcHolfAnhHzZbCcxb^{\\NSTtj^HfONTNIdPHpXZ}t@h\\fGRf¿`_jqD@eFE[PZ`GY``nG^qHBhSNErÈEpAPhPPI PX]VP`jFzIZ^TIdLzuljbFpvAn`PlMZYqvmJq¦yZElkdOXm~F¨zVI¢@XG^`g\\ZzDl]JlTR\\[VxTHGJ^xBPbnUh^lQZgWPfTrMJ\\RfOT\\NFTC@VlXcfg|MjLp|F^W\\mNGcQsVK^@ÆSf«V]N@p®nªnt|H\\[dJI¥iCeN]x_ZuHIō@_TeraNç¤­nwULëhc^`pKfaVLWhTtE\\]R¿F}rCfT~ToCÍciHmbKtSÐyzÍduBQ]eJm_FgXWQy\\gFmiaKce[¥nTIHkQgD³U]nFlqxY M°D\\J_JeQIEilwB]jAbS|IgSh_qKhWU]^O{WY_iEwVMMkHIUAEUL}mNgyM±hD[aGEWÄ±PQAeµQMOwPkSiuO@[{L_a_P[M}rQYGCXSyQ@aTICm£M[kNeQH[ Ava`A^[ZgKTwUuAMQ±YmJUW{H]g}se]cK}gK}·FgXUkoAsVkgAaEoatOL]VDemPgMMT_E£jRMnkFz]pkXU}i^wEagNea]E{TFeJmwcIm_cDY^[MSXewIe_NiykTajDu\\wSHuUOsRR\\O¤ITiIbEphdXDCd`X^iUUJiSi{GwX]GY_SBcwg§[IM§mNg_KNoUmKqO]NUUÁaAKT§WSVPgOaa±X]WMÕeDwYMPWYwNoMBW\\Apc`GQcp]lBJQh@p{ºydqvsfQN_x_nKzCanSJWcOC|]|F"]],"encodeOffsets":[[[131317,47696]]]}},{"type":"Feature","properties":{"adcode":230800,"name":"佳木斯市","center":[130.361634,46.809606],"centroid":[132.204856,47.248466],"childrenNum":10,"level":"city","parent":{"adcode":230000},"subFeatureIndex":7,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@rfTTfAn¨x~jRN^A|tÂ¸JpWpbkhhONjc`©RDlSbHvMrnTJ`®Hbhrp`M^VjMZF¬`VjA²ntHdh¦jª\\ĀhnX¨fPPHsfiyBVqB[_Ymwe³K¹@sH¿GXDÁ[Ëm«CDoK©JwYsogUsELUq¯AÅg©K_§M_UEoWicYsGXo@qYY[_qMFoIX§M¯]cT\\³R{D§OYs]]aUqeĝui¥Dr@{eBmrqsmB©OSYCcs¥SAWfyYkqWD_w©Qau]UoKemE¹FKYUoK±kG^O[UQci]IDSÓQDy[CNU@L{XAONa_ÙiswsOÇPXn@}OOasMnçJQj|TGl]R^VUbTTōk¹Kérw`µP¿UAYfW^k~WIQ|]\\oVBhgMP]}gJgcaAaPoCuPWKCHkLQi\\wwEJVJQTk@iVchu\\A¤cnÉdBaNSh{TsEIV[OqgI}^aMOqBmMMA}}SPmqEfcRqS_eGYYSSLwEkSeF`[\\uYm¡VJ{`Ad[aWDsbCfaNq~pUDNS@Lua_eKHwQcDaWB_¡o_OEA@B@KTJS yFmk|D¤M¼z`bhhidM~hA\\rWd`^DaiEqSUkML_@DQdN gSr@j]rXr|JPVxVNOiwq§BMWrwS}aCKooiFKeWOp_KuB_P¥[tcFYdA]LJ`|QBi}^Bz]`iHk|_hy^Gdc¤m@^WBn]^LRm^At[`L}^DH_z_IGMpaZDLalJbINfUzVLDfQZf¨@bZ¨D[jX²ItDdZ^ä»XpzDvO^rpRvQVuIH[`hlXIPZCl]xJNvAGqOJjhOv^^Âflu\\Xd©zch·\\Zj¡ePoSR_hgGPMKuVBtjXOR¡`QdLNw¢`¡@yU]FqjA[QovNtfzaNK`P^cXG`BWXPC`JYT\\dv^N[~HIl`BCVxD]RXZaCQ~ØBPÐde|j\\WXoĆT~@Ǌ¼H¬@àP^Ei½IķǚGEmtB\\tAAgZFÂ@A^uFD°Üb^XňFBY¸MòcDtUi[NkmsQJibULs]I~[hP¤Yx]IISIU¨^jOFlCPZlQnT LlkeD@slM\\fUNtR¨L\\KLfpFIR^PL\\bIhHUpZHWZrXWRdFRXpAgRCEpkGI`Rc^\\NfIFh{^dX@xXDFf\\TD~`NHffDGĎ¼|¢Ü®¶[xE]P`jHhl¸lzB@M¢AG\\W¦LiºdfU@¦AO|^dYh_jATtnNKRTCNBvSNxX@d|lKZX^E^cLr¤ZGh`lA^VDbXDAhªEGċ@@BCÕI[AčKđ"],["@@YRI\\vs@_w_AkVcrJBVp^G²tCLE]RiOYZoHQV"]],"encodeOffsets":[[[137727,48589]],[[134663,47360]]]}},{"type":"Feature","properties":{"adcode":230900,"name":"七台河市","center":[131.015584,45.771266],"centroid":[130.943937,45.881675],"childrenNum":4,"level":"city","parent":{"adcode":230000},"subFeatureIndex":8,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@±sHo]AUqIUdBlx`@`t[uQJZ ©AeMsPWcv[ek]Áu]gPIirPHuBIM^wDkYJOkW_gG\\JUvuRoQ]quPyCWoã¼Y]csC±JiW\\§CaY§@YeeRCUKVyMeaJkIKbYCobNJHy`G`]C~_Ks\\]BQn]Km^A]X@£nuUy[q@G]\\I@mUIHg[mX¯k\\DnYCKengg]b[QwVgWOAiag@[\\czZImNaB^`hrWMhzrnAlc¨£´h^Bds²[xDVpnBCR^GnsjQrBPNCPK`^to ^XnEjÈZNL^_LeºMHU¦ZVedOZdpeÄRBglUVdldDZvXhldlIT`GY¸WVEh¤zJrd`CVTLvt@RV`[jCPNWT@gXI`TDfdB\\zLL^bj@olTb`gZa@­qHqQKVÃnOvAzbKt_A¡\\uUA^"]],"encodeOffsets":[[[134790,47328]]]}},{"type":"Feature","properties":{"adcode":231000,"name":"牡丹江市","center":[129.618602,44.582962],"centroid":[129.895544,44.607512],"childrenNum":10,"level":"city","parent":{"adcode":230000},"subFeatureIndex":9,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@NZRH^^^XvJ`q_TkteKaJcjqM{yKtiCa{fWkXcV}RGj{vULiDuP}`EJW]WLtAPNpCFPWq_eqlWhoQOWtY^H`_H{hi\\{\\¥`UJgVBZcFZTrB\\_jC~[xf®NVV`Gp^nBDS¼D]\\FI^bX_^JfSpKXajHCV[lFhbfDVpNfr|LSÆH^P¤UXOEjELpQZbVYnlFZB`^ZWvpbQXZYJafS]KCu]wdlAfaTTRLtt@Z\\Ap`JTPVOpRZfC\\j@dVhVZKOiTSGos`G|c]Li^aoUbcJPkm[u__LyZmIhTjAZgOdDvaXPBMKHe|FDOr@T_nC`idLJ]vUb¡laG\\lpl`f^tDupq|UL]`MhfGJZtHLdOlB^TGruOÙTzApp@XhyRHj\\FCvNNcZGVJU`^RAf]VEzVHK^XBnhlRpBcNC\\LCbVtXŢƁѮkRFvePUaMTPTO`mViKIgvkNOHX©In}E_ZoF{[@]¡Sy~_OcXIforAZdARh±s]icVyNOfWCOz[NJTpDA\\hCZiNUbrhP`xepdbBbj^Bb¬hhjnR`hMhtHxz~C\\pWx`l`iRmt]HDQmAUowC±\\ct]A³g§¤kdmByqgNqXg]_AMbJnyY[d@\\bhBjXPUhRxa\\h^mhLfZDm[Cl[B]WuFcQa\\«EsWafYKgHDTwvcRWdAo_Z]OXyoU¡V³oheakVmWV_sY`eQWw[cAEYDJIemm`}U\\mSO½EK]HqXOYUIOaVW@gWKCoT{hWG}LaiTl@bQUFuaqr_J[¨cGggD¥[sgnUZeEc_ b`_E[pGSoRYmeqSkBO[weGqjGF_rOaUy@q_KaePHg_ZatMJyX[SmgGVqZFPaUIfuiEgZyKum_@sUkRogIgqY^AeqTMkS¡KKawkI|SQseI½Q}`iHcIu\\¿a\\{G]sYFook¯FOqO§EYn[AM"]],"encodeOffsets":[[[131332,45514]]]}},{"type":"Feature","properties":{"adcode":231100,"name":"黑河市","center":[127.499023,50.249585],"centroid":[126.988643,49.282601],"childrenNum":6,"level":"city","parent":{"adcode":230000},"subFeatureIndex":10,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@TYA@mNBdaH_{\\IaWDhUG[]VW]_HQQ\\_K[deMeifBdQY]jKl[K]Yb]WalkKiRQZcDHWiYW`cMecmSdC_Og]ORy]l}QMhoUVK\\maStUoSIUZSqK\\QOQUaCFyqMNi`SyBZ]ISWuC@iYD_kACa[bWFq]JYsQYaQXWGRSkU{\\oYGQQDgeYQ@eSWmHuQbcvYY]`W`ii_`__QKT[jOf_KaijUOcHJ`shFIcXy^S^\\|CCc_M\\KJkqA\\`EYa[gB`KBwaANiYOVQWKlmSQAQSHaKssB[}MSW·^mT@rGkSwD£hc[[QqICMlWWN[_s_}Bu¤PEDQc´SbJ¦YlLT{U]FmmW¢oLlOzVoìRdejG@\\¸BĖÆQT`LxtPjrxTÀ\\fRRRE¶¥r@fJVpbflAf{°TU]¤euaKcJçfs@KWiEBSsYL]cTHZ]AQ¡bH^QdHIB¡L_cEZYfëpI[DCmWl@¦qĖRa\\NDY^kfQNWGBozE^^~NGøvMbFngHkbk¨kWYKL_kULc_IVU`B\\ÅM}PQs]soGwSGjVMM]uqIeNkA{CJDù^]bEdVTdFr~ZNTxZR|dG\\jGNZB@WE^YxE¨V`bRfZBdhIZZO@`ORHPEäCfVR¨rzHK¢VDFq\\W`u`f\\DtCdlJjhC~ZdVCdb@LVjFBza^ZZYf]Df~ĎrkIVLz_rphMbFpbhBltUBlpWVEh~¸hLL~^dtfh~^|GVXnI²ZNRvBxVShL\\YB]b_Bu\\RGfM\\l¤NDnSJ@bzRWTDZHqRN~O\\b`K`|@\\PjvlTxONP¶RBfORÃ²FXbHC\\²gzNMh~nKFVBJVlGNNUxjFZ`|X]PV^gXrLg`hT{JaTiBA^kxFjRJIf`[I¯CNwZkrmEV^C´RhGlSJm\\¦dfbLnjhEz[XRt§FY{kELynQv¤]F¥B«xqHQURQ\\Vj¦SrgNLcwWEÍbuXFRkCQ}E¯BKcaScBf¡CqaMX¯@¡jjgIRy]oEé`Ï|wEÈk`ÑNeNEdÄG^IVB J`hD¨KTƁ©\\mXLpI]RPWV|¼lTUJK`zAj^}fûň}x½tkdWEcwJeWKeLcOA£Oç@E±QcVW{LGýE|mC¥»AReCa_w_©JNcIWwm¡IuLSG"]],"encodeOffsets":[[[129045,52143]]]}},{"type":"Feature","properties":{"adcode":231200,"name":"绥化市","center":[126.99293,46.637393],"centroid":[126.658429,46.904079],"childrenNum":10,"level":"city","parent":{"adcode":230000},"subFeatureIndex":11,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@`i`CV^U`b~hRhjBnOntFbMvP]pBXx^Fh^PC^a¤gzPZnfcpJ`\\CfOpPQlHTgVPdQCnHxUl`VG^eTXXVQXyZaPNQ|£F]UaBJv]nk`{hRi@VfH[T|HhY¨Bl~GVO~@FrÎ¤¼hzxDlrMl`J^vRKX~\\~ztQTftI`A\\bbARvTIR\\XE®ldARVTL`^FAX^FEVzJdTfn®RM^ZZF¬M\\erAb[fIp{H¹RSGh[hFp°t`Sä|\\`rN|{`PTSHtGu¦c@XWj@JU@G^hH`ZhczZSHFvZ{E{^DPdIXmTDbymLw`M`eRutcr¹zo|g@IRkAo^Rd_Hod[BAXpNxMXZNOxZfCÖN^X²WbbhPOTU¨XLSBÂbVV^MPLrnpVM`LMh¨nJN¨\\xhAd`THZW^Hx|TjIjVV]j_WDcWCcogaFJSj£J[PQQtVPGvT[xviCSbzlMjf`xJWfNT]\\CZ`dJnxdInfSEF|b^MfbhxFj]V~Woly^EmlNiQF¤S`NNOhfnUCK^sPgNqoy`UKJqlče}^CZeYYb]AyiEKUa@DcUYcD}igkIDcs[C_e_v[XErC¡ULyG§qQeUãDFGOQ_P@PYYgJcAeYQ_a§UwF]ZF@XAMYHiH[{cQwYMS}YEqSccU[[Ek^W_NS­]EKiɋsǽeť_ĥSBƇcCÉMÙBAŝYKeo]¯t_A]^É¥ÝıESQ@a£¥nY`@Vkl@FebE{Ii³EOTuQdi¦YUlc_teYa^Lz@h_IWqU~iskbuM}PIhB®zMLãEaT[Es¥]|Qh]FiW]TqqEJQDC·IiÉMkYLi©SSp·Qo]UQ|e°jFZL¢HVaWcNRUi]X]¦z^XxÏOcwI{XLÊijvNrYCHy TpktGNwJYÈXT{^ÓƉɴnXÓTBKiXe¶DJo]CDU«LDovH¸¥oiqPMQiRBmcA^SQOVsOkaXuOO^}"]],"encodeOffsets":[[[128780,46625]]]}},{"type":"Feature","properties":{"adcode":232700,"name":"大兴安岭地区","center":[124.711526,52.335262],"centroid":[124.201147,52.341079],"childrenNum":4,"level":"city","parent":{"adcode":230000},"subFeatureIndex":12,"acroutes":[100000,230000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@evull{XIÞc¾v¦Pxg^qA«UUKD_~aZqYYoC^klMNdd`dB¤KhPNVKz_jÕLfM`ddTzzM\\oVõl{Vapd\\XX^aTkfD]~`k~ibcgpohSd{RedLivFfVPvLvGVPA`\\RrCj»vJ­h·N\\M`bfr¨fzKClLµ@_LShNbrXJw]fuDS]PDdjMV¹«vwJWkUKmHnixFprlÈCVdG^chMbNL¶RRJSZ­tGes_WgDYjaLazih@neT{GFia{Ao]iIWRI|VpªXZTExf^ON»`EjulsEµ{uTAULN\\_TmD{Xw@Áµf«Lµ@CËQé{n[aoCaZYzUJI«Nm`Z`G\\^ÍF}CkKÇLST§NorVUlaZC^ersR¿KqQw_LmnEZs\\_KyL_ncV·tyfyRË@§VwMiJ}¡bEIoYeaMkRvrWh{Nu_CalaUWwX_x¿DR\\{FOi}sWTCĝm¥iÉK¿LùGÅLÏWJ]wBµvQleZQe[YORyE§I§LË@IF»Y½qeCLcQ]ą]Xg|O`YhKnFiIiJiiMC]RQ[ZU|F^WlQ_iC]UGaÏi¥A_[geaCKgbkgUS_­osuGmy_qgYE_]ÁMa[AUm[oMSY¯gZW~S°RnSpGJinazEzQNq^A_jDryHtc¦Dsi{mlqAs°SÔspDGvJjZVvVFPb¸XdMfNTNUZxZC`|FRo|iºDfLrC`_JqXirAZchGdc~h`}lmSaHyè[vaþVdM\\[¨Vv]@YkMPIaq_MU[½G^qetQBkT[FshqJAJoaWMchWRoCm`[pGYcgnwDa¡JmjS^ameAMiVWGWkYl[C]oe`m~UF{UhcKsd}rgXCX°[^StF\\SSEBS[pAfKXtO`FPZrJxGBrL@Z¼ZfAArjRHlvr`As|U¢N^Wi\\Z°TÞCfjL\\KjJ~MfTxI~sFUexHVk`POp|E~bvHZfK|BWrH@¶rZ~hJæYjR@hjj|TPTSl_JXr°Tjl@tpGtQf\\tz|@DoHUPTO|HvqTPvLdSVymXWmfckjq]SWTADghSFSlavKn^ID]]YNMÀ@[BUrSmApWA[`KtblKCg_]v[hGYSp@CMzMqX[G_bOVNJa_IY[CcWLY[THvK¢JxnJXMdªIx`b`fDQB¼¦nD{þFH|KXdU²RFè@¤PBdPfKXLIfdxXF"],["@@·FOQVi½AEiOdcD[SXMam]WEgqXSfRChYfsLgeROKwcolIS{^ELcfab@JYvQL_SdkDlon@plpFNPdQ|GPOpAbCrUNThIF[X¤DM_VsWp_dPbPgnH`l^wLC^f|AtUhH^a~pRH^SJtKT«AkSaDuIOXXCHP"]],"encodeOffsets":[[[130080,52205]],[[127123,51780]]]}}],"UTF8Encoding":true});
}));