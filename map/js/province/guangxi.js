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
    echarts.registerMap('广西', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":450100,"name":"南宁市","center":[108.320004,22.82402],"centroid":[108.467546,23.055985],"childrenNum":12,"level":"city","parent":{"adcode":450000},"subFeatureIndex":0,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@SH]e^QSMUNaJIXa@OTMCCUOJ[AqpBZLHL\\a@HSmWO@K^DfgAYJMQsC@POXWDEaQRIIYDQPSnSJTPITHLY\\]BCPiF@\\KZMGmXDP[PATJ`KHQdDNGnIBCdix^faXGDVX@L^PP_ZU@@LVPMJDnUTUC]JG`QEKJ_]oACL]GCWeM]FUGBQeIAI_EFM]E]U@_YGIHMg[O@OwSFVOFB^L\\IRS@MXIAEbX@BjcNJP]XEMUNS@P^SLESYFPPURFNXPjLLHSXXVHTCZZDFJUHi@V^WNgECP`^H`OP^`ZR^QXXVBezO@[QM\\gRmCa[WRGIaSAE_NFN[Em@_aKgBBKQCQUJWsqCSfOKSWKQS@[KCYh][FTQQUD@`SFD`G\\W@Mb_UUaNYEOcDQ`cXMCUaMiOGO[MEiFUHqI_JMDgf[GYccAYQIUBMqFW[UaBMbcZcceCBW[ICOaW]B[I@TKF_SMNMWWKKQB[_@UL[AWQIH_YK@JU\\SFYOqLKEYRaIUZOhNNSfSXJ^ILFRKPRTEdZZMgqF[OKU__IIMJ_UQ`AOQW@BPeDcNeIaWFgMKwS[eF_OKNVwAI]DWIMRUAc]OOcAU`iJANOIKH[MOJ^^OPOGoHST_K__YLKMIoOEF[_@OQRqOMTE@Mg@MUFOdQVSBQvGCMUOoE@][MCW~_\\ZXHJI`PNKXAJJVBZOPSTAFUIQPINiRMAaKYN]_UK@@QViAqTWAOPMZ@t\\DB`IXZD~\\CJCEYVQDWZWfNBPRNQ^cVObcLEPWFFZKHFdK^TfQZHRY@QXMZcbaQxBhaHMG|@XC`SVcQovIrMTIOQKDAYPSOKOkWGFWGUPWbIHU^UNBVRTDLPBjTLRiGWTMJSCSakYH[MAJYYBOGUuRi\\[I[w{XY\\JFczCKCnI@OTKVJPEE[CJK\\FZUDSgaR_R@TSXIC[HmNCN]ZBTQ`MdfNMLLbQAgRIFg\\QPBZOAadLHXPBZZ\\JfHdGXTbRNEFP\\BZcUzAJZERNJDV\\ENFVxPPEJPXSHA`J@DZl\\I\\aTXZAV`HTPV_TCX^DT`NIPJPh[RaZBDXLHN`TABWlBITKrFHjC`ddF`\\@L|ERTNG^X`c^KBKnA\\JRGZZ^BdO^rdGLUN@@[LGxEHVHbWLVINJlHUdQAAPVRHSfFXO@M]]^AfHJKRLA[lHZ_DStfBJX{jEbJVRJHV^VFVNDjf^CPTZF^WNNRGVHZGCaTBEVJJ\\APHNTZRvabZhJDNPGJT``vQTHCVUbYVMIMPNNUVH\\IVaNANmDELTGPT`BTVILJ[\\aKoBQjaLHNMRZEZ«lWEOJ@XsFOPBV_ZKTBTSJGRWT_FGVlfCJ\\BMNV`UVYlaGUNWFKISFaIGRLLQPLPOjKCHrJT@VNHJdKFA`kPTXQLAReR\\CZ^eLGL"]],"encodeOffsets":[[[111839,23856]]]}},{"type":"Feature","properties":{"adcode":450200,"name":"柳州市","center":[109.411703,24.314617],"centroid":[109.374902,24.94791],"childrenNum":10,"level":"city","parent":{"adcode":450000},"subFeatureIndex":1,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@^XJTETLJGTHTIThFfjOb@tMRDVKJHVVCTLMdWIcFMLqH[QWXevQYQ@EMkKGTULKC]HIOCGS]BIf]AL~JDAXOR@TUOAQaBKKaTAbLLIhYLGIcGc\\AXOM]@MY]P¥JkTWAmXYHUA_UcIUNHhLHITNLOPNDCvMJC`ZFSRG^FfZFFLZKITxGj\\\\EdkdCNVzJdtV~N\\BVPX@l^\\RdF¨I\\B`VIJNSTRXF^URXDDTKNPXVA\\M^G^e`CTU\\DXZXVbbDLLPhj^AL]\\SDMP@TnCPiPKTIfOP]HkVOTJ~LbfV`ZF\\iAyIQFQIaCFNOPJLPE@X[\\FVPHHlbKBPX\\NbMX]TU]Q@BR]PeCOHEtUJmUQS_MyB]MI[WI_FGVY^[LIGIge]qCKhKLOD_Q_WUaKKQEi]cIUSKSFSKCmDQEYMIJYMUVKFQA]sBAUcOe@kLCRMA[RwFFPIvD^[XcJQQ`OGMZMOWoG@MOUMFYfX\\@fQTcHmMFMU@MMEWy\\cF]EIU]JOKVeUFSc_AIIHMSC[RSMeOBMaGAUJk`I\\NfOV^`TThdHDZx[LBL\\\\@CKrWMWH]e[OgKGCcUS`SGUHLO`IPQZGUYUDWYUDg_[Nk^aCAVg\\]EKFgY]EQHBX[EQJ_GHKsCGH[oYVCRQPO@JdZHIf[PHHAneHELGQUUD]CMcPCKcWHWKAULWMSzaHa]LQNIKOHkUCUQKAS[AVODMPBJ[WHSXYsBmYUP[f@RcBYOW^}KUBaNCZYLEQR[EGBeVWdAFObM`UImMNWDSoDWSBEYJUVLTSvBJMd`AZLHRMfJb@J[fDDZZXTbVKNQ`BjVROI_ZA`DbQZF`\\HNLtTFdIh\\hjTGTcJE`gD]PkFeM]k@aQOOai_[ueGaPgTIxGJrVAbfFTOXad[I[[EEKDgPKMQCc\\BNWOaca]ViJEdaL[MuAUQUeCQaQMeUSaCMMPQyCG]feDYdceuqGaUUWHWRMGQ]q@KQAYMWVOZaDPXPRCPujEror@lVITH\\o@cGMOQQJkKqQHIRODOUcFiKW[PkOs@uGc@_TB^YH_]UPcE]NUbY\\LEvJS^aVI^A|_WUIStKVPVOLUB]HQRARNPAXWxFVZGh\\P WVQLUGi`[dKHuhQG_TCH[PEMKJKXDRNnOlB^XRhfX@`\\MXTPj_jLVAVR^RLhBhTVAlPbZVNtzR^IXD\\PlAJpbCRFVXXNTnNFTMVLTCVHA^~BHAF\\`ZV@\\OLkOEgFDurUTDljZHnKdXdLKRRRMbBXSPGTdP\\nEpV|`hEfTT^SHJfC"]],"encodeOffsets":[[[112759,25048]]]}},{"type":"Feature","properties":{"adcode":450300,"name":"桂林市","center":[110.299121,25.274215],"centroid":[110.518333,25.35549],"childrenNum":17,"level":"city","parent":{"adcode":450000},"subFeatureIndex":2,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@U@YgHWCIMUCKLeYJTVLOZJbKNYDGNLZ]\\I`DPKbJdT\\IJnrKNJdZlJDD`\\Z@PRV@XZbJnOZ@\\MfbLfZdlPdfrzEdXRFJT`P@XRdZCltBl`rJDNrIzB^XNNQ`aZO\\@ZHtIRCrX\\RFhE¬^bpbANFDPKUZPhpDRPjFLTiN]ICd[EQDaUMRuEGn[GIUIDQ^eMAIkWOQKiYLeBQHQp[TMTTF_fFPYFCZ]BLNBVLJZAPb^L^bPZAkllfMBTT@nMNGZXlH\\ONJTBbhHHbE`Ud[D_GIKMHQIMNY@QXJTBXILuASFUEkAOFcAGG]FYV]BGNOKYHFRSAUNiDLfaJO^SN_E[QLaEGGueOV[HeSm@QQAFROZaAMSOWGgFCoQANo`PJP^AVOZQCWcWAW`}RoSePE^SFc]Uk_O[EQ{@oGYWW[macSGa^c_eUU_YY]QmmG_ioJQm­SaiQc@sKaNLzKtWVkVWnSDQOQ]OkQKaDURaLW]cfUDOTN\\Fhv¤M^Jn]D_EcBSMWHYdWDkKc`aMOSO@[UMKYCeSo]O_FsXYKgDWlWHy^mBWSiEW[OgK]V_YeUKaI}PSlU^GPOJeLSjODOm@SNOTC^[BKi]OgKKaCUaYWCWV[DSf_H]N]B[WUOLMCSWCVQE]QWTSIMUJA_J[E§Qc][@kOWAUM[}sUIcUyDMlcFc[[HiSwJYLEKYEEeH]TQYED_NIDuMCPOMKJSKGGgVMdJ`VVBZGnWXBlS¦I^ONZ^@PNBWd[dHHJZKJgKKBabSLLbABRVP@SPQBWICK}^BJe^AHTPDJ^GLDVKHSlLFNR@RZfuXW\\RrGNKdEXJNcSKUDGULICUNQ@sPaeigEJSGSHSKIFSIS]WJU^EXURRRMnT`DDMQYN_YQ^@NK][OGDSTCG[DQVFVIR^DQ|PNEE_KADcVEE_TFVMzGnHZ\\lTtCXH\\ZHO`ADWTGvADROhQRDP^SnCB\\NJDVXNVh\\FFeE]FKZEZTPdTLpCfWP[RO\\KZQ~Q\\SxDbSjGNbO^Nd\\dlLVC\\qClcA[JO@eFWLFjrDVXDIT\\BD^RXPEP]DibGb^VBTlXBC`KJsDcLYTLLZKXLFfprNx^`]jbNDRqjQpi^OZBbd\\BNY^JT^FF`RhRN|ETTHZNPVCbLKXNZVE\\N^fHJJAtMZAnPt@lI\\YF[SUAUJUZOrAR"]],"encodeOffsets":[[[113764,25540]]]}},{"type":"Feature","properties":{"adcode":450400,"name":"梧州市","center":[111.297604,23.474803],"centroid":[110.99512,23.479776],"childrenNum":7,"level":"city","parent":{"adcode":450000},"subFeatureIndex":3,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@LS@_QgNeB[QeOMiOMgHkdQAItBZ_nFTC`_bLbYOY^oXIlFVTNZPBXaF]TW[o[WMH]hH@QKaJEWU]ACQLW`GZO@IXQCiMW`DT[E_XEHKEWJs@]VcB[QQaMWAS[FW[P_cMHO\\FPSMQRUAUZBZJ\\QlILMF[Oi]M_kW_F]PmaMcVyKcAeXch@ZUXLRdZ@IPMCQFW\\AG]RSpIBa\\A^`VWIOZaMWJMMYJgZMCSgCgyNWMKHIC[rbKd^ZIFSMim«AOfoI[LKtM\\QZFVK½KWBOZQKbRHREVfJVATQZ^^LTMJH`@NdXB`lKhgXGXtCTHHPdHZMBDGtJFT\\C\\VNTDZ^JBN`EBRfRGPfpEJbNL`\\DHP`ZFjRLJVAXSTJFKfXADJhPNV]\\PPbFFTdVMrNVKMD_\\IVB`J`GfUF^MTOC@vJbWJDL[`LxUNSIANNVGJp`BTWLGVNjTfVNF^QRZERNT@Z|EBR`\\LZPCJX`lCVH`ND@K\\HjlA~JZTZMjXHMLJ\\KPDAhVdXDCLPXnHENHZNERVDAªVCDVP\\EHPNBXExNXAZOdDvE`Ub]VcB]j]NWCGI_LFNSjEbH\\BLW\\JPKPFhoEWTUBGTYNYGOWCWVC@O[DOeNceWiLm_kNMKNiA[OUGWNYRQLo@oSwDaOASPsKgFc^]FsGYJA\\IdinYCHSKYKUySGqOcWOk@Q_[OgTIGFgT[WeQCaXSK@mEQLSaHOIE[LQEUVa@Q]UC`QDYSOH@ROZ[DQbLANYV@PX^MdB\\SFmWObSZHJnXLh_jiJeTsYPwAcFQKQVT`JfAZVRPBGTaNTYjPhJjGl`xPHV`O\\oN_riJu\\QpWRCZTnMPFRTHcL_G[NCJLfQXYFELF^Ef[EUgWMCUMIA[mD]TCORQPgCQuBSHCX_BGP[YWGsDkSY[mGT}VT^FdMJOQC@eOqPPTEPSTLX@RKL[fGfYYWBOWFGUQ@YY`CNJPOVHLIH[UODBUIOMBFPadmkCS\\QCIgIWafDASZSLBDXbFDSOK"]],"encodeOffsets":[[[113042,24620]]]}},{"type":"Feature","properties":{"adcode":450500,"name":"北海市","center":[109.119254,21.473343],"centroid":[109.343711,21.665234],"childrenNum":4,"level":"city","parent":{"adcode":450000},"subFeatureIndex":4,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@[JMEU[cEePay}NKLG^U@I]MAaVCfaHOYiHMCAcaPYIi`]SAS[IGJLXSJGMQ`QM]FBOVYgBDcKOo[ßAYKOFgpSFSESgo]sL[MoDeMOcIPRTgO@YRDFK_gOwKFiWQBUSWCOHYCMKIYGiAaPupjo\\OnMzCtBÎIG^[bLhORoCaOWcU¥WaQ_aIYFeLQfFdCZK}pEpJf^`DPĎHHVa^NEntVTbz~FjHZlaR]ZRSfWnSMjAtDF]bArerClDJUfFlNJHdRX@TOBS]INQBeRSSSPOfPbAtKBNXGRSHET`\\@TW^TXCdMZ_McAmZkWWZ"],["@@`SG\\PNLM^ILJVn@bKRUJSCuYM[Fy"],["@@XOHT_P@S"]],"encodeOffsets":[[[112239,22435]],[[111707,21520]],[[111828,21409]]]}},{"type":"Feature","properties":{"adcode":450600,"name":"防城港市","center":[108.345478,21.614631],"centroid":[108.016067,21.869663],"childrenNum":4,"level":"city","parent":{"adcode":450000},"subFeatureIndex":5,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@YEQ[QGgH_kQE_JWO]cLYqWCKYSJiOEYRSKEaOIBc[KCVYHQO]CmFaJgOqCOWYmJ{QaEwRGM^JQZQEsNCAQ^KU_UAGWMCPSkIHQUASm[K@Om_LKUGLKOOTYaSOFG]LMSQO[XQ^aFa[}@_TaOOMa@cHc_I@KkgIQaUPSqQJKFmX[GUUMlCrMRHLIbpjJfadHHVN^GZ@rTTPXHPNzJ^VVCTHlILQVCBLXNl]AQVKDQMIRKCKROdKRDJUXWVw`AXPxFhBfKV]¢ctE|FpNVPCT]TqRINLLnNTLLXVTfLXAVSL_Ca_yqwCQJMbBnZT^bHMvC²NtP\\PJbnV\\dHbddZjpnL^W`^QNUGKQU@ST@jZUPEzIRNxWfwV]GUF]X}SmLcO{KwXILHVeR@^QRgBSPS^TlKZjrcPKPLXG^RARbeJA`WTPnhNCP`HZZ^BFJjTFGBbYPOA[REhQJBhaRKKMNce_NSRYAM^MDGnD\\WJSTQ@Q`"]],"encodeOffsets":[[[110691,22909]]]}},{"type":"Feature","properties":{"adcode":450700,"name":"钦州市","center":[108.624175,21.967127],"centroid":[109.020264,22.171739],"childrenNum":4,"level":"city","parent":{"adcode":450000},"subFeatureIndex":6,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@AhWS@`JNENSFWRAVfQRNOGZU^GTHVENi`Kd@nPXfhhCdQV@d^^\\fJ`TL@viLFcdXnROJ\\RE\\^dAAdNLLWRIKMJORCRWlMf_TEtNJP@nJ`RRC\\SXI\\[\\]PERPZhdVhPNBRVBDRMB@XQXF`YNIRgHwRaF[E@wUPSSaLO@DbYX}^]lEFFULIQWASKWTETuR__ISOHCMgIaYubYQMSOG[BIIFUSADbYHUGQHMM]XYEOS]DieMCEU]UGUQIIUFa|iIWeAsCTY`kGB\\QKILeG]B^^@NWPeEGTUQBORBVckGMIUJKaXGGUwFKH@\\M@KVcH]qcP]AYYQH[ImBAL]L_d]WMHQS{F@K_[cE_ciDEGLqJSkAAXSBM_KGCWYAQbg\\IOJO_MCSW]SDU`SO_GBUWYbSJ[k[CYI@B_TGOWFIOOUwME[FCUMIFQIYyBVYd[AEOMFaQWScHeG[IYYOAGWcKEHiSEI]AYY_GDOgMOmXSB_fIQaQBH]KWLOdOiqLYSkT]TOhARQ@]fQGUJKxW|LdPnK~T^WVE^HxUXeMwJQ FyVOiY@TSV@LRVHRM]X_K]hJ`CXQlw\\KJjPDPQTs@QQSiWDOfHTTNZ@RKfJJbORSA[V[PAFPdDLP`NjAd[T\\NoOvBbHjJZNLZDPGXDVTRAjXLEPx`hELQC@ZhPQSJOPdfNpC\\NtKp^ThTFTEhoPEZLàBp\\LPCdhAUZAP^ERNR_HNTIKWHI\\JBT^Tj_ZJbOBdNDjGPZbGDebUNBJ^V@H]LK~MbzfOdFV\\NF\\I"],["@@KEL_dMJNmf"]],"encodeOffsets":[[[112239,22435]],[[111455,22126]]]}},{"type":"Feature","properties":{"adcode":450800,"name":"贵港市","center":[109.602146,23.0936],"centroid":[110.00316,23.307229],"childrenNum":5,"level":"city","parent":{"adcode":450000},"subFeatureIndex":7,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@V\\fZlJNAPPONLfJL^JROJJrLN`QZUDQLJ^IbHFUzPPHXRKVH\\WNHARTDFvnBHQjKY`GQGTYVXNVINFe\\@^GGc~_FC^`MbR^bdFXXDdKbHfA\\Y^ENSlYAKRGAYVM`@^[L@XbVB`TUVudZvPClc@gXDjELFIbA|ITBZvj\\dAjWBJ^^XH[\\LKNTpRFHMPJ^MdL`\\\\BTYfJxbvILJ@\\FNdPDZv^BfLdUzNdnb^O`ElXN`j^PE\\KNkJ[RYIYABVQVNROT[EGPdNO`\\EXT\\XBbNRRA\\Ud@^ItFXGLWFF`S\\_CNXDjWR@JYP_HKXDR^BXVIFLb@RgGG^N\\X\\pSXE^WbOAMYUSkEWJ]pPZaZaK_`SDmEY`sABJcRGlNhjPPNRfA\\MfRh@`KT_COOsDwUMOGSGI[JEPmK]XDLWK_[UHaY[GXOPWrmIkdQDGOEkGWSQS@mfODcWW[wiww][K}GSOQkMUcUEwGUgEIiH{S_aQoBcJcC_KcFSuiKaSVC`WZPWEG_YScEUZWiIoSY_@HOYBYd_P_QU]I[e]AQ]YIP_QFGYmAUQECMYQCNulBJYHDVgjAbGeiKPWDUZiIQFGVLTi`QOiPYiS@I]Y@OMF[MBK]_JQOQBmYTYYSZSEGHKfKY][DfQBQRKSWlOB_LEIcMG@UISGqLDPiKOROKKHQbJTELJXEVMbHZkVUU_NM[ADIkeHU`EXSHQTIASLS`YAUPOtE@WPIXF¬kFYYNQGMbKRipAbL\\[KIUJASS_HOKSFnCBMbMJUG[VUMMNONJZUVaDUSGFSXSTLXBJRVK"]],"encodeOffsets":[[[112295,23207]]]}},{"type":"Feature","properties":{"adcode":450900,"name":"玉林市","center":[110.154393,22.63136],"centroid":[110.187226,22.440758],"childrenNum":7,"level":"city","parent":{"adcode":450000},"subFeatureIndex":8,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@EEF^k~]ZWCaP@bKTTVO@x\\FbExQhGJQZME_RW@WNACQUAAQOMUggcOYFQ^O\\[J[TWD[QQI_@mIOsMSFe`kNQXQDIPLNQJKXMKBccB[]QFI[QPWmdcKEujK@_SeI][]@cRUDcggWeO@mLcj_FMGUHSV]HYPQMeRBUXQTEFMIM@_XTBgXYlXnYdB`NNYDcSWX]@S_[FSTGHQWMLABsOaPeTOTTfQRAJMT^PAXHPoAQVOXAF^TKr@RXVEVVRQ^BdfMPLNQD@RTXTDEhfXMXH`BlEVJRILVXALPXODxHPhBBI`Kb@`YxPVfJFJ_L@AXPJJ^\\CLcX^TElLHKVL`MCKnQtD^^VENvlWX[\\IXFfCrJCVNDWpWJd^]doRLXEhPA[tFZJMX^DAvGNSBa`OFAZRL@TPHLXTSBMn]XLCRPPXFAZRNZEn]N[|oKILI\\ChPPLCPtWbCGgPO^DRQpVJPPCJNR@GbU^WHK`PbTLlFRTB\\`HTfHB\\[hMvLJLGPYB@XYdUJB`QbYJIMYTBtKVPXAhMTYDARS`JJVGNOjI`FLXOZBTTfV@MhFXQNZJFLG^fJ^[L]NDBXPNfNjCNJbITBVRClYRAPLX¾ULYE[RsNKLJ\\epBPn¬NjETYJc]aLqD\\GJNLMXhzhDDTYNIhNZINNXYbJPUX]_[BAboJQTH^[BEXDRONJY@QcWKYVg@Wdu]CYcOEM@[KIuJwaeISZ[A_[cK]NOIGNQESoLM[KG\\]WI]XABi[cuiAYJSB{JaKEiFWC@hkdDuOcYUvSV_UAWaK@]\\_@UNBZQHBLkZMT]F[ZeBaGcLWCEWc]aaQ_ND]`Ed}HH@]f[MEUJWMZUHSHRZ_iLGRmAEuSCBQMG[XUGQLGWOOVyGEJaI]RKVCRYM_qKIIQP]IIKKePMOOMBkIeYU["]],"encodeOffsets":[[[112295,23207]]]}},{"type":"Feature","properties":{"adcode":451000,"name":"百色市","center":[106.616285,23.897742],"centroid":[106.289767,23.986179],"childrenNum":12,"level":"city","parent":{"adcode":450000},"subFeatureIndex":9,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@gAgQ_k«W[MIWQGqKKMa@gM_QkAaKUQuJcCOKWB[PYDeeISQCOJmJOOJQ^UFS^iTMLUA]NSFUKQCsKYMCDU_OE]LMMGgKMYGMWaQY@eQeYAUMcaoQDsbAPSTaRQVK`Il@YCSNeAOWy]mASF{`M^kPYZgZwPyGoJWRMdcHcSyBkFsPGPAbO\\[L]rQIN]TVuDuUIMsC{J]BOXN^YVaCE`a@E^aAcQiwYLYEM_OAka@@HEWUMBGFMomCMJWGgUeNi@OaC_ëao[QQK{esgKWBOKQYSOq]GiLSPJ\\KHNFIDyK^gHa\\yFSGKmSYMuOWUC[W]H@KVKVFFTV@FObUELcNQL{RGJHPWPGOSJiRYVE@SN_GINgNIPHtANMLaSIQ_SfWpsVO^APNHXCb]¬AX\\lXF`QPADjVFh_@\\FW`CrMb_\\CHdXLP`NpFXEJS`CVMTA\\MK}\\UlJNAtedSPSBUa[Q[JWSBKSPAZ_EQfAPgVcbHBMTKOyIYiQATsBIcJ@AaZWLaxgNUbIRQJHh@R^i\\@PVCT\\Z@\\HRUHUNBNS\\CJMXAJQ`EL_TU`GIjUVCPPR@BTKTJbR^@lZbETLLZKnPfCNPfE`O@oLAHuJWAgPWtL^ZJVTJOt^tG\\Y]cCOROzNb@TdAPRBaTNLnEJErP`TP\\BjUTC\\AG^kXHVO`KHY@s`[LQZDPYGeUK^GpyPIRiF]`YB]\\UpIJMKQgAhu@U_QiCWOMUP§Zi@]ISEYawHgVKLSiU[siS]yQMwK[SWcUOOBIRVbANURuJo^UAYQULShWHyCuWWYCyKMwAiMiyma_YQAePMOaHcGbEjSN[\\EJOUOSDBSPB^YHO_CGISJHVOTeA@KcOOOSEDOmAo}SsyQI[JafiO[V@T[H}EgHWQqLWTMzLnOb^N@z[\\GpETHTUDaZI\\DdSvwlEXGFc^YB[TGXod@MRHVfDZLXOlFBTnG\\Mb^AdMR`XKZDbTj_RHnFj@dM~E~CQSQZ_bOd@\\KdJdSZDJjFDETVpCX^VGVLTC^TDbJX^PoZAnPRI`}ZMEMte\\Z@\\Ef\\\\j^pjRd~jTXTArZdK`QFeUODKXTZ@PMVLZZ`DLQnFJtXNhT^bhDbJTlnfPBXThMbDO[TKEYbH¸NfTTlZfRX_ZErPvj|PVU|MPYDs\\[@W`CGcNKZK```LTSpGPHPO]]PI\\NLGPJBMjIV_BPd^PBdQVJNCXJ^xBULM`PE\\fxTNLEhbXfJdMfCAOX@PR_BVRI`JN`JV`PLE\\hrYNcYSFOQQLKE]JWIeTMTgMYPJVQbFZKLPrEZ[TIVSA\\Jvj\\v\\NX`DdKV@^NPC\\Y`G^QTUHYA[OYC_lBRPTmDSGPsceO}NoVYTCRDhWJmFKTDXZRCZoP_KOQaMYWUc]OQDUf_jYCMPDjIFQdUAIWyJIPiDU]lERHZKJMEcs[QNmT{RG`Q\\Y|WDIG{HcPiykO]fKBSdWDSXSCERSHAPlPKRWFIQMBiMUV[NHNwMbBVr^dL`^LzojEdYnL\\RXaf@Jj\\WhMDkIYPGfW`ubARNZGl[d]CUVIfP\\BC^ed}CHOwQ_ALhRBftTETL|L|F\\PHTlObWZqJ­z[XS^P`ZRNXE|gnKRPAZV^OJZPLRNCJT\\NDMXG@XOPEXYbeNKLAVkTUVS`wMd@bPN^E`JI^abET`XW\\mBgMAS_MAIaYYN[GiF@UaIsnOZ"],["@@@@eSHE^Z"]],"encodeOffsets":[[[109129,25686]],[[107619,25527]]]}},{"type":"Feature","properties":{"adcode":451100,"name":"贺州市","center":[111.552056,24.414141],"centroid":[111.366008,24.358064],"childrenNum":5,"level":"city","parent":{"adcode":450000},"subFeatureIndex":10,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@TBveJPF\\`@JWfMPDNO\\DRMbBJN^QHlTHInHbMHGXTb@Pb@NMX\\M`F\\XA\\UNPXF\\ECRP@ner@t_RQpQTBZKFI^@bTzAR_ZL¬`InCJXXDNID^XLFR\\HJOXBJP@^TB`\\TBPdXPJXTRDvGh]LAdgoRERSJBdRZZPGTDnSbOAcr@HcPER]BB\\UhNZhJ[jHNGZZTRrXLP@fLTE^TuhwJMLY@YY[@iLyMKDA\\Y@iJkMgHUXkG{CqRIU[BocqG]J[AaKGaFkTQEKQYUKSTiYOLOZSTgR[BEOaAIbWAGJLXxEbLPF`RpOpepEZV`ATYVNXVHLjUFgZQ^@ZNXnRNTBbEJuH_PMXDfbxKTaCSNEbYLWCOgYOHUV]LMj]RWMBU]IwmEYYOKU[wec@iMLuKwIMF{EIBQPqVYVIVB\\TZEJ[@kOsBmNYBsIIeG][MUFMYLWaKUDMOGYSS{FQMQgE_]EISZ]AMc[AaPYj]RoriCQaM^i]_MwoqEeWKYLKKZSdKtCLID_WASkUAa]aHCjO^OFQWC][AJSWCCUiqKEEX@fIPB\\kdD[rUDkK[cMcP]MaiHaTwC[T}RYR[LQPO\\eXoDSKOcYSRWKeDI\\M`HdKSGEQNOSmDYXQRov[jI`qpMP[U_OG_wHkIiOgZiSbMHSOAUQBYIeS_RURLdExBZOtfSjI`iKgmWGITYPanXTEA[NcW]@OZUBMKRa\\CPY@QPGZTRCD_^V@RUbFVKRF\\PJbGKTFR@nTLbWRDXfS\\EhJHhS\\PR`l@XPPdHrzTLVZTLGZDjmJcB[ZItH^Ed]hEtLTOPBCbTx@pKpQRMZHXPVB\\MjNLlMn`jKfXMdPf\\C@PUDDXPXZHZMHSVAXSpFEgLOIOX[AKG[FaTiEM`KHJXD^M^idA^UVaF_CuPcBYMWFw"]],"encodeOffsets":[[[114335,24406]]]}},{"type":"Feature","properties":{"adcode":451200,"name":"河池市","center":[108.062105,24.695899],"centroid":[107.845852,24.642393],"childrenNum":11,"level":"city","parent":{"adcode":450000},"subFeatureIndex":11,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@PYtmbJ@VjE\\HZMbZBJ`NBThNnAX[_WFSbaJ]_I]FOM@aNcxT_VUlSBULKfMZaFWPO@WWHCN[MISMDKQYOPIU]BYQOmL{hWFMYQO_T]\\W®yrIXYPakGS[O{E{KSKSFesQAKg`BxRGP~DfcD]AO[JeVU^D\\cHkMYBQvaX_HeZOlJNCXgi[@IbeQWK[ZmFcpiKy_]cKq]AUNaxGM\\MVUjNNAJRXELQkOBOTGFQTDTWXCTcLA^elPjzdO|GJHXCZ{R[H_|QnSM\\RdtNFLIGYFQ^kVjCJOzIJXVBRcJECiNOZD`iVeRC^PVdZXbNPR`LpODYYQCWLSnEXICgDQZSpU~MfPtdOTHnCOSAQ`kZD\\PZBVGRSH]Z_D[O]MU@cL_CMWu[i[IuB[TL@`ZJGXR\\BVK`@A\\LRXLNXNM`TLE@S\\J^AbXDP\\JAXfDdddYNabA\\VEXNrVARJBZddHZe\\ChINJ`rVGjENFP\\PHNjVbNDdWR_dCFPMZVb`VNaX@H[C_TE@_VCRRES^\\ZgLD@\\RTXLLTePDTtrIXRVRDALhAbL@`FnM\\MEF`TBJbQH\\XbnDhQN[\\RP@PT\\GHYQrJFXU^BNvK`VGnIFGrJN@hPr^[~HnLZXEbRdBddt]HEZTTIVMBUf`NJIbBjXVRBZYPALXX@V`bNS`KrDbEdSJSdmS]\\THnWnG@`Hd@vPtOlX\\jLdEPVPCJQRGLrIlRRPHN@d[pSGJkUq@qpiFOvQDWOCOYbUPNXBZLRr@^HRQNGXVXbVrHfvcdCZefH^zDORNNbDVTNfbRDRVfVRvB\\NbKFcjI^UdbPbMX[ADdNROLChFL\\FJ\\c\\WbSPeEBaqUIwHSJOhHbvf`\\jPbRP@b^lNEfOlC^_hIFSdSHgig[cJSEKsGM_[YEaR_CYBJ`QPiU_AMRULSaYWCYeCI\\a@eIQNKGBYc_INuASTUKIVFZTACXTpXCNMJn_VaNEPcBUXAfFHQ\\FRKYZMDWDqtJXQfoRDTgh@HiVYGF^MHM^WRaDQGsMIWWHMl]~ONUDkZOX@POJwK@QQFQqekgKiYIWbW@OuE@TIZeDSP}]IKPWJJTGTUGMNIW]wHUGXYEq_UDM\\WC][WBiLOOUCqWGKgcUcMwLISDYSgQeGmeYBcOAIqEIWy[MPYLYIYQcROMKLJPVHVhM`mfGVL|QXWASSKHBnIPibQ^ET\\QRaAUIc@QKEESYPLYMCQPqSIMUICUgEI[GRQB@MsBMDDZGLhOpUBm[_DIrg@ZHZXXGRcBabUBOOEQU@SR{AKLArNEVJ@PNHCvSXBRNB_VIIWhIA_bWPuPO\\LjMhcHWIYYCY§WiCiJyUAaVkIS]M_AuSDIOSGaMg_JcULUC_NGLe@[N]rIFSMLYEIH_mWEQRSkWi\\mHiOQUGg@cWYJaOQU@mZiSAa^]FoQmKMUDkUU]IcWCUOQaC"]],"encodeOffsets":[[[109129,25686]]]}},{"type":"Feature","properties":{"adcode":451300,"name":"来宾市","center":[109.229772,23.733766],"centroid":[109.416662,23.851919],"childrenNum":6,"level":"city","parent":{"adcode":450000},"subFeatureIndex":12,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@mHmXSG[T^cnITcTaFqC_LMT_a@UWWBKZOAYUQiWaAIJ_MVeNAJUSSFY^GcsAcQcFaYWmK}G]\\Oq@gIMHqJEHm_UuLAMV]EWqIRGZ[HOSfyUAWW]RYQ]_POG__]DOhFXMU]j@VGEIYCDYGSWUTWKGiKWOEMVQOOZEFTTKO]T@VMFN^WIOdMAiW@FaJBNWT@JQK[A]PEEUxT@P\\PNhJGZH@`^V^FEN`FBJfJARVH^EfNDX^HDKpB`^LIRFH_^IVDVSCmNIUO@KV@`YOOK]W@CUHbW]ejwDcJAHmCMRcLGI_BS\\OCOnWNHLY@[jEDO^AZ[GKJSSOTITmROZCJJRQFbXCPW@OtDNRZIhBCeL]P@nXGTb@K[KGAYro\\BPIDVNDPSb@JWbIVMTN]R^fTGFHYTZTSZnZRARP`IL^NAE\\PNZ@J^T@ZjjORPj_KSHUREjJVYXCLOfjHBahiCUZGAIvkDMZRDNRFBVZnEH`RJO^ZBRf^J\\V^`R`OZcZAGP`@TZJpXjVYdFZTH`XFOXYD_TULbvjETLdD`IdAdRp`bTG|JjhFHVFxdVNVRlTP~H\\Lx^jxxX\\dXPCneT@TRHXFlHPRClcnJXqPOHWZ\\Gb\\VL`KXWCL^OnIFJ\\THHNPxVtCPP`DPLCTaECWKAYTBTeCXbhJDJ[RDTnlbcEONAJPAVCVPG\\KJUGOPMI_DZZR@HVXEAPZXeZeHK\\QLW@SKOTSFOOPr@fRDIPcN]EUSS~yHUNSEF`UFCdLBF`MF{OCRQ]UJUECRH\\SDCTPH^\\ML]@ZRM`RZCN_CmSQNQQWV]FIVeDGI]TSSFe_gU{Fo[mcOHSTOAWNaQQLQcKcWmLYGkiSCqVCvhEPFKl[PU@_YE[GB}AB]UGSDUKSNMESmWMUWQEaDIokB[OWC]JyQMsUaYkOUBgSgAQKQ]BUKU`iOiWS[N@_eWQg]WkAmPQMWCILNLOFG\\SDH`gRGvcL_\\HjKVURX[OHgUYwEWXOBQMQBGRA^KVUPUOsLJTXV{`]BUJ]bTuIKF[aZMVF^Od^VG`]ZSA"]],"encodeOffsets":[[[111531,24838]]]}},{"type":"Feature","properties":{"adcode":451400,"name":"崇左市","center":[107.353926,22.404108],"centroid":[107.277353,22.502179],"childrenNum":7,"level":"city","parent":{"adcode":450000},"subFeatureIndex":13,"acroutes":[100000,450000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@^DdE\\MBQOKuTW`IG[THlCZLTAhc[Y@UMMqCQIHUoYJGOMFY\\OOEc]PMK[YCSiSYLGI[QK`WO][S_N_E]K_B_hCRe@McHMMGD[IYM@IsIK@FMMMUHQO@eRK@SMQVc`UCcoYC_XMNFlM^FNM\\L^@VK@_LIFyV@VKI_bO[_@BQSWP]^QVDFOQCMePq\\cD_EYMMDeE]_[S[JcJAH]HCxhLRNjZJKbsXK^A^PbF¼_PKJsLOhQTAZLfjlG|eTSDmEKyMQC]PajQ`EC\\Y^KwVKlK\\UJebOOLHLVZTfHXPRI¥f{BQABGpGZh~zbRlRZGrROTbVJRlh@L`JGd@dNbPPSb@`\\~Eb]bWRP\\TRKNH^PEbTSZPPKLVHKLn`@P\\LTnVBGRlJOTNDHXVBV`]LBRMDFtYRIR]HNxQbF|RnIXZPrDhPbInE^DRPZGDU\\LAdPJFbTLZQPFIjZTDLrXKZ^dXP`IRF`lhGRHR\\ZFhbCTYV[EILDF\\OFUISL@PmJLDyDEd[IWZx|J\\[\\QjVvPHZAZBI\\NZGblDTITSNHXQjSKAiKOSCUQMA]VGVaJOXHVEXXHPlPLOTBZLCPRSJqNuJRpUd_TWD{@HGNgbwARabYdWN@RQZYGeR]ScLGELEYXEFOdKPadUR]QMAOeMYXCXURFZIDD}[YCJWA_Cs[Y@ONBPSXBrUj@RL@`VM^LZBbQNMjOJJREVSBOTYPUAIIWBML_OIJWG[Y}`DX\\N@^pFVPDNuHARUTcREPNVh@@NSFPNQrPR`@E\\PFJpLNMLHd_D@X[\\CtOZ{NUV{OuiqOYFW`eQkYSSe·MaGFZSLP\\aCgNWSAeOkmISCaag]gSMsWEIRmCKY_KYNU@OSYLWPCfVREL_YcBqWSiSc}iQ]oi[[Fe"]],"encodeOffsets":[[[109231,23439]]]}}],"UTF8Encoding":true});
}));