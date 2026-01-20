const { ref, onMounted } = require("vue");

const theme = ref("light");
export function userTheme (){

    const root = ducument.documentElement;

    const applyTheme = (value) => {
        if(value === 'dark'){
            root.classList.add("dark");
        }else{
            root.classList.remove("dark")
        }
    };

    const toggleTheme = () => {
        theme.value = theme.value === "light" ? "dark" : "light";
        localStorage.setItem("theme", theme.value);
        applyTheme(theme.value);
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme){
            theme.value = savedTheme
        }else if(window.matchMedia("prefers-color-scheme: dark").matches){
            theme.value = "dark"
        };

        applyTheme(theme.value);
    });


    return{
        theme,
        toggleTheme
    }
}