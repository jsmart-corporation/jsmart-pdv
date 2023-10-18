
import Router from './Routes/Routes'
import './Common/Styles/ReactToastify.css'
import LoadingDialogProvider from './JSCommon/Dialogs/LoadingDialog/LoadingDialogContext'
import LoadingDialog from './JSCommon/Dialogs/LoadingDialog/LoadingDialog'
import { ToastContainer } from 'react-toastify'
import "primereact/resources/themes/rhea/theme.css";   
import PrimeReact from "primereact/api"  
import moment from 'moment'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/pt';


function App() {
  PrimeReact.ripple = true;
  moment.locale('pt-br', {
    months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    monthsParseExact : true,
    weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
    weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
    weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [de] MMMM [de] YYYY',
        LLL : 'D [de] MMMM [de] YYYY HH:mm',
        LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Hoje às] LT',
        nextDay : '[Amanhã às] LT',
        nextWeek : 'dddd [às] LT',
        lastDay : '[Ontem às] LT',
        lastWeek : 'dddd [passada às] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'em %s',
        past : '%s atrás',
        s : 'alguns segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    dayOfMonthOrdinalParse : /\d{1,2}º/,
    ordinal : function (number) {
        return number + 'º';
    },
    meridiemParse : /AM|PM/i,
    isPM : function (input) {
        return input.toLowerCase() === 'pm';
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return 'AM';
        } else {
            return 'PM';
        }
    },
    week : {
        dow : 0, // Domingo é o primeiro dia da semana.
        doy : 6  // Usado para determinar a primeira semana do ano.
    }
});
const customFormats = {
  dayMonthYear: {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  },
};
  return (
    <>
      <LoadingDialogProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt">
        <Router/>
          <LoadingDialog/>
          <ToastContainer/>
        </LocalizationProvider>
      </LoadingDialogProvider>
    </>
  )
}

export default App
