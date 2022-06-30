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
    echarts.registerMap('陕西', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":610100,"name":"西安市","center":[108.948024,34.263161],"centroid":[108.797426,34.10671],"childrenNum":13,"level":"city","parent":{"adcode":610000},"subFeatureIndex":0,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@]JQhLmGSNK©n©Mo\\mtmHIzPrF_FEdgRBfUfmPRQ|xPVZjHY[ìPRSfRNg|EKmee­UKTuBUWV}KIsYkaK@§}U_XH£M[SUfqEJµiALigaBi]EmqKQsD@KgEQmJgn}Oue{SD½uUHQOJDoUmA^yUw@nFYMµZ·EDge¡OIC©s{GY{gAPi@M\\Kehs[cu­wHaY­HSU{eSNUin_PipDfOtDÊmpG¤°zcj^^UKgh\\r@`UfTbSAX\\Dvx|ZfG~p@}fnffHº_`orAB`dX^`¢YZ`C@un]xfA\\VjCrRjlEÄbhaBZIjFnO\\SV[bCZmCxRG|\\F\\ndAVh{lX`TOT\\jdN¦Hr~VKtRUDp\\LtR]ViJonHRt"],["@@WH_[NOjd"]],"encodeOffsets":[[[112389,35034]],[[111795,34621]]]}},{"type":"Feature","properties":{"adcode":610200,"name":"铜川市","center":[108.979608,34.916582],"centroid":[109.038368,35.195996],"childrenNum":4,"level":"city","parent":{"adcode":610000},"subFeatureIndex":1,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@Je£Sa]UJYUsgYouYL[gEC_k[nONyeQwCs_Ccsq`klSVXGnBcn[J^emTsbWE\\hVIbOH\\U`TBhTzW@hVD\\Ynj`nHbbjOZdDK`dzFlQ^b@LYLjR¤SNgVEdhEbHWf©UgPctsTSbK~gJn¦X\\Z@```\\MjEhbCuvTbG^]BhhSTCtcDcUsX@RÁDÛGmJ´o@Ã]qmJeeFUkSBWmq[qPYi}sY{K"]],"encodeOffsets":[[[111482,36193]]]}},{"type":"Feature","properties":{"adcode":610300,"name":"宝鸡市","center":[107.14487,34.369315],"centroid":[107.205191,34.380063],"childrenNum":12,"level":"city","parent":{"adcode":610000},"subFeatureIndex":2,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@KLmFIdcBFOPf\\_vAdToC^\\JkOvLliPNCrmp`\\aÎ@~_rOy`[pDk¥D@fazR@wÀEjgMJUuPUÉCgea@D]]BP[V[KZSIUu[OAaYK£TgE{ZFk[k`wHKGiiGSukVO[mFUXSc`wD^[bN[\\JFXiWeBkCI\\AU^EeW»^ÁXOqIIMBfGF]scL]Y\\sg_Td_PT_z]C¡rsGeuQQ_BewSeoJYt_GYeIwfCW©gQWxUFSeK\\RlSNXRQripSP[RT`[QOSnUp­tUdDdYhAKskS`kic}dSYFYx¥V}AadBf^hWN_\\³Zio¹OH£R{Gisd Rf{CWo]M}fQPmI§ªYÁL`UjZXxd`IpNfX}r@ÚqPJNDðXrlO^nDt[BYh@li u¦M`VI¦LffEH\\atBLStBQbbfMdeLctCfdpHVnQpvhI[aMmaOATIQekKppCXthrCrpIbn[nAnrOjm`jMVfTV|GTZ®Gb®xdvt\\gfLN[@OjB|hHZt|DªPJf¢Ch"]],"encodeOffsets":[[[110621,35050]]]}},{"type":"Feature","properties":{"adcode":610400,"name":"咸阳市","center":[108.705117,34.333439],"centroid":[108.394642,34.785702],"childrenNum":14,"level":"city","parent":{"adcode":610000},"subFeatureIndex":3,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@Fix¿Q@by@e¦ClC\\oz_P`q@}bÍ[_noDqMjOKkPul[ID]pcSuB[`OePEdAJcnEKL¸F¶YZNEmx@zV]nBpVCPIRVG¾vC|Tvf~PhmnIRFLh@CRtrLnFj^bAhKjjBI¶FerV\\T¤NG`W~V@¨bLZlJt@\\KBkZmucdDp^rUfeVevo\\aPJgUF[XaStn]fI\\mAdmWHUkT_ltrdDt`xDfRMzmPl\\D`hFK\\vZphZVt ZVIb^¤TIfmLU~AJ\\a|@`_lQxsJ]\\qLYKFaVsFXqQWoJsYgkq\\e_[AHEJFO^AcUewTgA§oyCuÍO{@V`mLCYNIojYGpRKN{SjKB{cDyc{HU_fsbDz¡\\MY}E[tUjDIkjEIYY"]],"encodeOffsets":[[[110408,35814]]]}},{"type":"Feature","properties":{"adcode":610500,"name":"渭南市","center":[109.502882,34.499381],"centroid":[109.856208,34.950969],"childrenNum":11,"level":"city","parent":{"adcode":610000},"subFeatureIndex":4,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@kXau~KjXx\\RXyN±HufMn\\FÀY¤J^OzpPtZFvhb@ZNZx¦QL@¶\\ZG|zðPRx¼fzzZpRh~IvWJ@f]hGÌSdFafA`OocÛeqs_wI{kag¥HUL¹U{clAdcfIJcneKWgQy©PPaOOakaYk]C]aTOcvYs}J©EgTM\\mYYTeEO^½SmoEçËBueOc{gaFi[N__@_[Y¥WmhIL}TatSdshOªVXeGFacgUFMh£TiQKKZa@R]kEcyL_CYciPaamGi_ZmC[U@gyXgSA_SVG[p[fufUVe]qCodcnvlYAL@[~LUVXvALS®VffLnFh{QMTeOQ\\ëZiGUYwOR{QnOVeAehQFc`EEOqJynGnsp[ªNªmLTMnHKRg^IUz\\ZfAvyStxmjJToc\\Mq^SXvhaÀpATla`a|~RjhDb^@z`|C~Jc¶O_þNXTD"]],"encodeOffsets":[[[113082,35236]]]}},{"type":"Feature","properties":{"adcode":610600,"name":"延安市","center":[109.49081,36.596537],"centroid":[109.319393,36.442397],"childrenNum":13,"level":"city","parent":{"adcode":610000},"subFeatureIndex":5,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@DlHL[lX`AdkhNZMvqDhgGZ~I|hrDOXJhYbRdrJ|e~nhP^AYhRxwfotsy`A``HraH^^WVe_MPdfW\\HGTl@\\pHj_LXVJjUT}JMXTNTpM`}]YH[eSwT}g_FQjw^©Tiq¯_yXkvfApi\\W\\m_YlHxwx^Nh[rJbAhcRoG»nOlkePcuMR{k]NLlzKQeGUjA|PHriT£YEµfYnwdwHabqU]weAcYQo{Y{iK\\uPOUcDQIeWVuQuLIm^sHM_JmuMTR@kWFcekGY}}LsGKYY~[VLkQIMRslE@u}Hec]FmygTIQmDN__c|YXevMN[WKBiyS\\kK£\\_pkh{[UHYsckDg^_C[tnGbKj`z_zV M`wtDvyDjlPZr¡zSF[fW@BsN@deo]³cuAi_uG]`_lMMuo@PcU_eOcmMAIY\\O¯[gÍE¥coya@WZUA¤iO¤ORADpqF[_Y@ooDsYjSSaLykdDPhcoou^UM`yVMRuNlpCx]G_q@W\\UbHwGyQmc¤}pRpeª_NRe`grJAWGPNYJlfPf[@kiU`Gdj`OCcnApSD[nBfv`tBesX|AbkPfd]fPChWLwv]`KYdDstLVMfpIzng~_~OtF¥Qs@¡ZQgf­Tk]kTOakQNwwIoOLgUKe_ghoRqIÅVYa}\\Oeb±rOHY¨yHaEZLrK^[tIRw`k@_b{I[BV}nK|LtZj~OZ\\rnrAXlTEVffIrnÄ^p@³nIÜHÂC@QtWdVdCDsTSgg^AH]SavuDd|PvfÌAèpFn¾TP]fFZSnZN[hSªF~IZtduPS^b^DlZlbPbbPOªORzhLXmfIdeJcdkBd|ºVVK¦Gbh|lJ`xrtÜfpdP"]],"encodeOffsets":[[[113203,36715]]]}},{"type":"Feature","properties":{"adcode":610700,"name":"汉中市","center":[107.028621,33.077668],"centroid":[107.106739,33.090936],"childrenNum":11,"level":"city","parent":{"adcode":610000},"subFeatureIndex":6,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@hL]Vi]yd£¯oHÉnsCePoCmqmBm\\aoJqqDsgWoDoLlRfSJBbPNn\\bgJoumRGUoecsDKdcfeNaaRsAKTsA[bGeFKeJ¥_U¥Nvkjg@AZ\\Cs]mkPWqCïMOIÙr@~qeWMJoc_WwiY_VA]iIFwk}dcWkfE°Kj_LMq_@bsM§cfHb]SqCDnjJhmYeLa]S^iKeRcKQgaBugWPQywG·NULqUtlcO{harGB_SgL^GBk@AcVWiPUyqxJE_beeQ^ycUCY^WU¡±¯Xo¥kCQWY¯Kq~FgTi[D|sV·jFAeZ_SKLwlHV{|Dpb|PbK^^fAValXCKj^hONT|P®Kzhvk`DVzrKpyp@Bw}[ReH@@IIA¢tBR]`JJYèInmnT¦QqLiS~pBhVMGjh¢PlZOTjf¢|¢AJR`|Mp`vJI\\c \\rKpTdQGMmR_fEXcCmVu_£WSrsnÀ]jj_[hDjzbjArOMyTfOJcYSP[PZ{n[`x\\K^Nz]`o@clyT· ³inXc°§bBz~I`TvAx\\_fB^hrj[}vUanN`hIi¨LN@jWTV¾pAputCt|oPTZ¾]NTY¶DZuPXnS\\BA\\iIOpRPcXS~qx@r BXlK\\¤Il^M´RhMNR^DVujXFLl\\^Uv\\trRdUTr`vU^vM¥qHc`LjKVpYbNYzD|"],["@@G@AKJB@J"]],"encodeOffsets":[[[110648,34519]],[[108623,33551]]]}},{"type":"Feature","properties":{"adcode":610800,"name":"榆林市","center":[109.741193,38.290162],"centroid":[109.577105,38.048207],"childrenNum":12,"level":"city","parent":{"adcode":610000},"subFeatureIndex":7,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@S`lLX|EzYTTuPDbHzJ~ÆÖXxzJU^PBrNcREbĆZ\\jBXb@frxovO |XFXkfPbEZZVNJhg^±jgdS²e~\\q^KbXhinMtNpMhvUnC`t@RNBzTªpVE|R¤bRffZzG`S\\G²XDThmLa`jbA~n^xQlnVd\\b]vbVHdK_z]Xfvl¨N¤R`RXvUd²þKX\\xjdAsZQZ^\\KVu_M{CcSkpXrWPmWS|HdzRDXjLQRNbLcfyµIE\\o_iIMU}cËSyu³Ñoo[I}K}]MeRQ}`{Omma@[^LeZM_hyX_doZh\\FuhUK­bgIMVqlEvdPcAc£[eÉm£Fkzm\\a^BÂÇzEQZmPykmaiA[qeHM]h[AYQmq}Ù¡xkiqOc}oQwÅeYFS{kHjãÏe]eswgLsQoue¡[[]^_iaUPd_²gJQehAQq[]DYUKwUeofUwrsVA|«CYu£K½B³PoawAwR]cDyG[WÑccD§zwR±a¯sÑOeOPQ`RSWc]gCubJaRCY`XUxiR[~DnPfSKju@ÙbµMYuUTi[s{k`w]£GoMQiKg_MoRgCDgKE_mFOWHdsFHO[[k»AY§SgE^j[`cFkY¢{`uHgKoq}{z@uQEbK]P£bSmdajZiÜIR²IYXs¦P\\UM\\ndzRHGxa[VXr@H`w^oDMkQvUN_zVNv]ppgdOcCzlKTbiTtZCppZ@\\`rECoBPQP£jB£VXYb@pz¦dÎF\\hP°Z[JBNdnfPV`Odp@NvkN_`H^vj`vB´dp^f@cMAtX@\\eET¢yYqkOizCCuxsN_U`y_yLiamH\\s`Dh]lCdZtVG|\\lg`o¤[lLT[zAjXLM\\uNWf{Z`dM`nCJRhSnz^Efd~G@vkFQtNRJKl\\UZ}LZtH~KZ~lHdfXE@lQNSnvIN`tG]JnvKvRXUJfRdCPVO[vjLZ|p|RdZfB^xrVbaxGxcZm¶eF¤ZjSGqOB{VifHRyLkK^M|lQvNOdlfPk¼mpHdQBgaqIg\\]MxwGwZkn`X[[jBoeluzW°`jrªSx]Ri`E~hxST\\fZG~^"]],"encodeOffsets":[[[113069,37861]]]}},{"type":"Feature","properties":{"adcode":610900,"name":"安康市","center":[109.029273,32.6903],"centroid":[108.929995,32.759384],"childrenNum":10,"level":"city","parent":{"adcode":610000},"subFeatureIndex":8,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@ÅIUucNMur[B¥CÃ°¯aReaFoWWteESfÇ}[oJHbymE³m[jH°pQ¬Oz`YItL  PlpZ[`mRLZzK¬¦nglJnGjexiL±EW^JpBwem^@v_DY¡Z_]cWA_qB_p¹`eGmee~o@}eH{YuwCW[BaTeS_Vq@g[C{ZyMZaUoLKid_rG¦N]uuVq_VSQcq[sVu[]KkWEviCU]MQNQgN³]Jk£L[WkA@qrwT}dWQOPojJB[AT[WmvOCYZµMS½^SYpO{DsvsBoo½SUiX@KMj§gJM_bmV~u\\qinavARddcnOrcdBflPxSbThElXXgpKNwGcqGĄÍ®H\\MHus¦S|gHfSB¢k¬a{Eyd@¼aNouUzsAqQÊEtJDRDDKD¢ZEjbYPAZ`N}ÐmhRnvJV}[xHnvHl{InbWhLk~^rFdYL`pVEx^VXn^Xr~Rhbcv@tZNĂPc¸YDZ|@_vBrwCpVvExbLMjeXBeZPvE¨iCWZ^tmTKZ{dRijuB_ZµA_`BuRQc[eFsxjÜTæuP«rwd¯BSSX_Sa`^@{X"]],"encodeOffsets":[[[112066,33948]]]}},{"type":"Feature","properties":{"adcode":611000,"name":"商洛市","center":[109.939776,33.868319],"centroid":[109.907166,33.647601],"childrenNum":7,"level":"city","parent":{"adcode":610000},"subFeatureIndex":9,"acroutes":[100000,610000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@QEE@icMP`\\D¸JYAgbÃakFQiqiD[UIoX]²FjKfwHimkImh«¥yLKYnQ\\_oYOksKJZy_PR«oG¯\\i´nnFzGapI~\\ÈTe fFXsXEpfbbQ°Ä¯¦D\\AvqNdMvVÆJtldxbN`~JYhL@zTTKDaFRYU~J¦BTÒa¶utRkV¬@P®E TUzn¼W|RhOA\\fRZtIb@nmXfwdDCdTdf|E|VOb\\tX²UrtEPph~C[`tOjtN@]p]r^LbKHBJJFO_XL~K`~sV¿^ip_Lg|Th_tA`D_T[twJc\\mML@bshHZPBb¤nGhcFGpmvE^YSs@DNFGnXz ibBDXFKhJe^£VDXalN^bBtpGHtYT_D`cKwNCWSýM`µPd}I{Dy_]@Caig}Qb{b_SkoBb¿ugW]TNr[dSpiIwnsTuzeB[YVyQsGpmjIUQ^s[KCoVsQULq}¥GcM[iPS_SW|kgUcBmE[{[HwQDnYaDU\\T[k¯"],["@@l°mPiEC·XGF@RF"],["@@IEAILG@X"]],"encodeOffsets":[[[111807,34624]],[[111807,34624]],[[113692,34283]]]}}],"UTF8Encoding":true});
}));