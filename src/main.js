import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';

import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FullCalendar from 'primevue/fullcalendar';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Galleria from 'primevue/galleria';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import ScrollPanel from 'primevue/scrollpanel';
import SelectButton from 'primevue/selectbutton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SplitButton from 'primevue/splitbutton';
import Steps from 'primevue/steps';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tooltip from 'primevue/tooltip';
import ToggleButton from 'primevue/togglebutton';
import Tree from 'primevue/tree';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/common/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import './assets/layout/layout.scss';

        const app = createApp(App);
        
        app.use(PrimeVue, {
            ripple: true,
            locale: {
                accept: "Sim",
                reject: "Não",
                choose: "Selecionar",
                upload: "Upload",
                cancel: "Cancelar",
                dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                dayNamesMin: ["D","S","T","Q","Q","S","S"],
                monthNames: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
                monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                today: "Hoje",
                weekHeader: "Sm",
                firstDayOfWeek: 0,
                dateFormat: "dd/mm/yy",
                weak: "Weak",
                medium: "Medium",
                strong: "Strong",
                passwordPrompt: "Enter a password"
            }
        });

        app.use(ConfirmationService);
        app.use(ToastService);

        app.directive('tooltip', Tooltip);
        app.directive('ripple', Ripple);

        app.component('Accordion', Accordion);
        app.component('AccordionTab', AccordionTab);
        app.component('AutoComplete', AutoComplete);
        app.component('BlockUI', BlockUI);
        app.component('Breadcrumb', Breadcrumb);
        app.component('Button', Button);
        app.component('Calendar', Calendar);
        app.component('Card', Card);
        app.component('Carousel', Carousel);
        app.component('Chart', Chart);
        app.component('Checkbox', Checkbox);
        app.component('Chips', Chips);
        app.component('ColorPicker', ColorPicker);
        app.component('Column', Column);
        app.component('ConfirmPopup', ConfirmPopup);
        app.component('ConfirmDialog', ConfirmDialog);
        app.component('ContextMenu', ContextMenu);
        app.component('DataTable', DataTable);
        app.component('DataView', DataView);
        app.component('DataViewLayoutOptions', DataViewLayoutOptions);
        app.component('Dialog', Dialog);
        app.component('Dropdown', Dropdown);
        app.component('Fieldset', Fieldset);
        app.component('FileUpload', FileUpload);
        app.component('FullCalendar', FullCalendar);
        app.component('InlineMessage', InlineMessage);
        app.component('Inplace', Inplace);
        app.component('InputMask', InputMask);
        app.component('InputNumber', InputNumber);
        app.component('InputSwitch', InputSwitch);
        app.component('InputText', InputText);
        app.component('Galleria', Galleria);
        app.component('Listbox', Listbox);
        app.component('MegaMenu', MegaMenu);
        app.component('Menu', Menu);
        app.component('Menubar', Menubar);
        app.component('Message', Message);
        app.component('MultiSelect', MultiSelect);
        app.component('OrderList', OrderList);
        app.component('OrganizationChart', OrganizationChart);
        app.component('OverlayPanel', OverlayPanel);
        app.component('Paginator', Paginator);
        app.component('Panel', Panel);
        app.component('PanelMenu', PanelMenu);
        app.component('Password', Password);
        app.component('PickList', PickList);
        app.component('ProgressBar', ProgressBar);
        app.component('ProgressSpinner', ProgressSpinner);
        app.component('RadioButton', RadioButton);
        app.component('Rating', Rating);
        app.component('ScrollPanel', ScrollPanel);
        app.component('SelectButton', SelectButton);
        app.component('Slider', Slider);
        app.component('Sidebar', Sidebar);
        app.component('SplitButton', SplitButton);
        app.component('Steps', Steps);
        app.component('TabMenu', TabMenu);
        app.component('TabView', TabView);
        app.component('TabPanel', TabPanel);
        app.component('Textarea', Textarea);
        app.component('TieredMenu', TieredMenu);
        app.component('Toast', Toast);
        app.component('Toolbar', Toolbar);
        app.component('ToggleButton', ToggleButton);
        app.component('Tree', Tree);
        app.component('TreeTable', TreeTable);
        app.component('TriStateCheckbox', TriStateCheckbox);

        app.mount('#app');