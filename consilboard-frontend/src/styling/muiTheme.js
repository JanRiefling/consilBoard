import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "../index.css";

const consilBoardTheme = createMuiTheme({
    palette: {
        primary: {
            light: 'rgba(151,227,151,0.5)',
            main: '#00A700',
            dark: '#007000',
            contrastText: '#042126',
        },
        secondary: {
            light: '#f6955d',
            main: '#fd5102',
            dark: '#CB5940',
            contrastText: '#000',
        },
        info: {
            dark: 'rgb(25,90,104)',
            light: '#dfe7e0',
            main: 'rgba(242,151,101,0.8)',

        },
        error: {
            light: "#CB5940",
            main: "#ff3f1f"
        },
        success: {
            light: 'rgba(242,151,101,0.7)',
            main: 'rgba(90,160,171,0.7)',
            dark: 'rgba(25,90,104,0.7)',
        },
        warning:{
            main: 'rgba(25,90,104,0.1)',
            dark: 'rgba(90,160,171,0.95)',
        }
},
/*    typography: {
        h1: {
            fontFamily: "AlegreayaSansRegular",
            color: "#2b2a2a",
            textShadow: "none",
            fontSize: "28px",
        },

        h2: {
            fontFamily: "AlegreayaSansRegular",
            color: "#2b2a2a",
            textShadow: "none",
            fontSize: "22px",
        },

        h3: {
            fontFamily: "AlegreayaSansMedium",
            color: "#2b2a2a",
            textShadow: "none",
            fontSize: "20px",
        },

        h4: {
            fontFamily: "AlegreayaSansBlack",
            color: "#2b2a2a",
            textShadow: "none",
        },

        body1: {
            fontFamily: "SourceSansProRegular",
            color: "black",
            textShadow: "none",
            fontSize: "16px"
        },

        body2: {
            fontFamily: "SourceSansProRegular",
            color: "black",
            textShadow: "none",
            fontSize: "16px"
        },
    },*/

});


export default consilBoardTheme;