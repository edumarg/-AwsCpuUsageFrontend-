import React, { useContext } from "react";
import { CPUContext } from "../context/CPUUtilizationContext";
import { LoadingContext } from "../context/loadingContext";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [CPUUtilization] = useContext(CPUContext);
  const [loading] = useContext(LoadingContext);

  const mockData = [
    {
      Timestamp: "2021-12-09T07:15:00.000Z",
      Average: 0.301666833666667,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:45:00.000Z",
      Average: 0.30499802797360404,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:20:00.000Z",
      Average: 0.31166588900740555,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:35:00.000Z",
      Average: 0.28833230579768,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:10:00.000Z",
      Average: 0.3050026392467614,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:30:00.000Z",
      Average: 0.30166377782592513,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:05:00.000Z",
      Average: 0.2916675556675944,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:55:00.000Z",
      Average: 0.3950035834263898,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:20:00.000Z",
      Average: 0.31666805578796536,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:50:00.000Z",
      Average: 0.3083356946884285,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:25:00.000Z",
      Average: 0.39166836120416704,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:55:00.000Z",
      Average: 0.28166666679259256,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:20:00.000Z",
      Average: 0.3149975008860879,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:45:00.000Z",
      Average: 0.44333255654998655,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:15:00.000Z",
      Average: 0.30333036136897557,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:50:00.000Z",
      Average: 0.31499766724444334,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:05:00.000Z",
      Average: 0.29166563906712933,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:40:00.000Z",
      Average: 0.29166761118981666,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:30:00.000Z",
      Average: 0.3216664446194443,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:00:00.000Z",
      Average: 0.31500119469490306,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:35:00.000Z",
      Average: 0.298335250162507,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:50:00.000Z",
      Average: 0.4083320279162052,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:25:00.000Z",
      Average: 0.2883343612226838,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:30:00.000Z",
      Average: 0.40666930563194514,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:05:00.000Z",
      Average: 0.3133343059930417,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:35:00.000Z",
      Average: 0.3000000001333316,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:00:00.000Z",
      Average: 0.31500100022037253,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:25:00.000Z",
      Average: 0.29500108341805753,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:50:00.000Z",
      Average: 0.3399985557361078,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:15:00.000Z",
      Average: 0.343334778089812,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:40:00.000Z",
      Average: 0.3049991675694387,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:10:00.000Z",
      Average: 0.2933324168069442,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:00:00.000Z",
      Average: 0.40167030575602247,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:45:00.000Z",
      Average: 0.2983327224814869,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:35:00.000Z",
      Average: 0.5016682500680559,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:30:00.000Z",
      Average: 0.3916650557583325,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:15:00.000Z",
      Average: 0.29666266692869436,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:05:00.000Z",
      Average: 0.3933281394365578,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:35:00.000Z",
      Average: 0.3716670836273216,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:00:00.000Z",
      Average: 0.3316664169708271,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:30:00.000Z",
      Average: 0.3100019445416688,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:20:00.000Z",
      Average: 0.31499986114768513,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:10:00.000Z",
      Average: 0.3366650856411592,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:55:00.000Z",
      Average: 0.300003972421767,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:45:00.000Z",
      Average: 0.3133353892666721,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:40:00.000Z",
      Average: 0.3633347228268744,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:25:00.000Z",
      Average: 0.30333316696666623,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:35:00.000Z",
      Average: 0.2933313056532385,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:50:00.000Z",
      Average: 0.353333444929646,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:00:00.000Z",
      Average: 0.32166586123286856,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:45:00.000Z",
      Average: 0.40833325039861085,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:20:00.000Z",
      Average: 0.31000016683425924,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:55:00.000Z",
      Average: 0.27999902782453673,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:05:00.000Z",
      Average: 0.37500127786481513,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:30:00.000Z",
      Average: 1.143303556653669,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:40:00.000Z",
      Average: 0.33999811157407267,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:15:00.000Z",
      Average: 0.31999788899629383,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:20:00.000Z",
      Average: 0.31166777786481686,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:30:00.000Z",
      Average: 0.2916656119768292,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:05:00.000Z",
      Average: 0.2966646945106476,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:40:00.000Z",
      Average: 0.30166858343009473,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:15:00.000Z",
      Average: 0.4016683890175914,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:25:00.000Z",
      Average: 0.3000001113148217,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:55:00.000Z",
      Average: 0.2950008891018537,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:05:00.000Z",
      Average: 0.3749939173347059,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:00:00.000Z",
      Average: 0.3166654168736032,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:10:00.000Z",
      Average: 0.30833063943285516,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:15:00.000Z",
      Average: 0.3033354447444518,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:55:00.000Z",
      Average: 0.3333369447713038,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:20:00.000Z",
      Average: 0.4083337778583334,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:30:00.000Z",
      Average: 0.4166618337231503,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:05:00.000Z",
      Average: 0.2983342502439865,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:15:00.000Z",
      Average: 0.37999852795601796,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:40:00.000Z",
      Average: 0.3599988057384256,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:50:00.000Z",
      Average: 0.32166822232407666,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:00:00.000Z",
      Average: 0.3233345278319447,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:25:00.000Z",
      Average: 0.3616677500615743,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:10:00.000Z",
      Average: 0.31333669457453994,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:35:00.000Z",
      Average: 0.2933323889379627,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:45:00.000Z",
      Average: 0.30666677807870063,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:25:00.000Z",
      Average: 0.30166877817963195,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:35:00.000Z",
      Average: 0.39166591680787183,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:00:00.000Z",
      Average: 0.31333550003611166,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:45:00.000Z",
      Average: 0.27833405566203867,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:10:00.000Z",
      Average: 0.3000010833837966,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:20:00.000Z",
      Average: 0.30333416678518704,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:25:00.000Z",
      Average: 0.3966709447703759,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:50:00.000Z",
      Average: 0.3499965001305528,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T10:00:00.000Z",
      Average: 0.3183331668037052,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:15:00.000Z",
      Average: 0.28999905573333307,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:50:00.000Z",
      Average: 0.3850041116703749,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:35:00.000Z",
      Average: 0.28166475006249947,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:25:00.000Z",
      Average: 0.3866688335870394,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:00:00.000Z",
      Average: 0.3150032783907438,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:30:00.000Z",
      Average: 0.30499980565602003,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:20:00.000Z",
      Average: 0.3699998890120349,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:55:00.000Z",
      Average: 0.37833336114490745,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:10:00.000Z",
      Average: 0.500008334800081,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:45:00.000Z",
      Average: 0.30000225020695204,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:15:00.000Z",
      Average: 0.29666847274493857,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:05:00.000Z",
      Average: 0.36833547235786923,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:40:00.000Z",
      Average: 0.31500255574074526,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:10:00.000Z",
      Average: 0.3083352502060258,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:35:00.000Z",
      Average: 0.3200032502569505,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:10:00.000Z",
      Average: 0.3233333611449074,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:40:00.000Z",
      Average: 0.30999986118194445,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:30:00.000Z",
      Average: 0.41000069508656073,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:05:00.000Z",
      Average: 0.37500402835974816,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:55:00.000Z",
      Average: 0.30166769449490766,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:25:00.000Z",
      Average: 0.37166705583518567,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:15:00.000Z",
      Average: 0.28666572227037007,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:50:00.000Z",
      Average: 0.30500213895787087,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:40:00.000Z",
      Average: 0.4116655002416576,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:45:00.000Z",
      Average: 0.30999977795277756,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:45:00.000Z",
      Average: 0.3066646111453698,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:10:00.000Z",
      Average: 0.3083330281921294,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:40:00.000Z",
      Average: 0.3216690834754654,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:15:00.000Z",
      Average: 0.3766712502513956,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:10:00.000Z",
      Average: 0.30666530580046714,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:00:00.000Z",
      Average: 0.38833125007083275,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:35:00.000Z",
      Average: 0.2766648889796276,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:50:00.000Z",
      Average: 0.30999805565555333,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:25:00.000Z",
      Average: 0.30166772281296367,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:55:00.000Z",
      Average: 0.2966656112935149,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:20:00.000Z",
      Average: 0.3100036391004719,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:50:00.000Z",
      Average: 0.3166674168560187,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:40:00.000Z",
      Average: 0.3050032778712991,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:25:00.000Z",
      Average: 0.28833327797128977,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:10:00.000Z",
      Average: 0.30666688895740746,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:00:00.000Z",
      Average: 0.3183321944995367,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:45:00.000Z",
      Average: 0.3100002502430575,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:35:00.000Z",
      Average: 1.6283572784907474,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:05:00.000Z",
      Average: 0.2816659446453688,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:30:00.000Z",
      Average: 0.3016666389208333,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:55:00.000Z",
      Average: 0.35833194471758567,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:20:00.000Z",
      Average: 0.3933328614337992,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:45:00.000Z",
      Average: 0.3016638903295864,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:10:00.000Z",
      Average: 0.31500216693889443,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:20:00.000Z",
      Average: 0.30833366680370544,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:55:00.000Z",
      Average: 0.2983333057189815,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:30:00.000Z",
      Average: 0.38666405559907335,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:05:00.000Z",
      Average: 0.2866665834263903,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:35:00.000Z",
      Average: 0.30833330565786865,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:45:00.000Z",
      Average: 0.44666966676574155,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:40:00.000Z",
      Average: 0.38833741707916714,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:55:00.000Z",
      Average: 0.2916675556675944,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:50:00.000Z",
      Average: 0.3116625001999923,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:00:00.000Z",
      Average: 0.3016656389060182,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:45:00.000Z",
      Average: 0.3783325002416579,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:10:00.000Z",
      Average: 0.3166640840801146,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T08:20:00.000Z",
      Average: 0.3749991390421317,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:55:00.000Z",
      Average: 0.28833141679397933,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T09:30:00.000Z",
      Average: 0.304997861180092,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:05:00.000Z",
      Average: 0.2883313611754624,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:15:00.000Z",
      Average: 0.358336416847686,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:40:00.000Z",
      Average: 0.40666466673333107,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:50:00.000Z",
      Average: 0.3033335001314831,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:25:00.000Z",
      Average: 0.28666755563240914,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:00:00.000Z",
      Average: 0.3516640557611102,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:35:00.000Z",
      Average: 0.29499797235416436,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:40:00.000Z",
      Average: 0.3116665000694444,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T21:05:00.000Z",
      Average: 0.3750025003166645,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:50:00.000Z",
      Average: 0.37667011127315275,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T22:15:00.000Z",
      Average: 0.2949989445925923,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T23:25:00.000Z",
      Average: 0.2783331669805551,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:35:00.000Z",
      Average: 0.3799991668638916,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T00:00:00.000Z",
      Average: 0.30666261150183394,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T10:05:00.000Z",
      Average: 0.2944443519074073,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:20:00.000Z",
      Average: 0.3199999167680538,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T19:55:00.000Z",
      Average: 0.2933344169060141,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-08T20:30:00.000Z",
      Average: 0.31666383345555305,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:40:00.000Z",
      Average: 0.3066668055912037,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:15:00.000Z",
      Average: 0.2950001112120388,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T06:25:00.000Z",
      Average: 0.31666886135046873,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T05:50:00.000Z",
      Average: 0.3466640556740712,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T07:00:00.000Z",
      Average: 0.4216659723671274,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:10:00.000Z",
      Average: 0.30666766671574097,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T01:45:00.000Z",
      Average: 0.3099992778953685,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:55:00.000Z",
      Average: 0.29999886136527226,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T02:20:00.000Z",
      Average: 0.4283380563315178,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T04:05:00.000Z",
      Average: 0.3999985001805517,
      Unit: "Percent",
    },
    {
      Timestamp: "2021-12-09T03:30:00.000Z",
      Average: 0.3033349725310253,
      Unit: "Percent",
    },
  ];

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CPU Utilization",
      },
    },
  };

  const labels = mockData.map((data) => {
    const date = new Date(data.Timestamp);
    return date.toLocaleString("en-GB", { timeZone: "Israel" });
  });

  const data = mockData.map((data) => {
    const value = Number((data.Average * 100).toFixed(2));
    return value;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: "Metric Data",
        data: data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <React.Fragment>
      <h2>My Graph</h2>
      {loading ? (
        <div>
          <div
            className="spinner-border"
            style={{ width: "5rem", height: "5rem", margin: "100px auto" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Line options={chartOptions} data={chartData} />
      )}
    </React.Fragment>
  );
};

export default LineChart;
