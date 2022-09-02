import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


interface IState{
    currentLang:any,
    langs:{
        en:{
            header:{
                nav:{
                    projects:string,
                    education:string,
                    experience:string,
                },
                langs:{
                    en:string,
                    ua:string
                }
                
            },
            presentation:{
                position:string,
                about:string[]
            },
            projects:{
                title:string,
                links:{
                    details:string,
                    git:string,
                    web: string
                }
            },
            education:{
                title:string,
                educationTypes:Object[]
            },

            experience:{
                title:string,
                place:Object[]
            },

            footer:{
                content:string
            },
            details:{
                backBtn:string,
                web:string,
                git:string,
            }

        }
        
    }
}




const initialState = {
    currentLang: '',
    langs:{
        en:{
            header:{
                nav:{
                    projects:'projects',
                    education:'education',
                    experience:'experience',
                },
                langs:{
                    en:'en',
                    ua:'ua'
                }
                
            },
            presentation:{
                position:'junior front end developer',
                about:[
                    'Responsible attitude to work.',
                    'Punctuality.',
                    'Ability to work in a team.',
                    'A positive way of looking at life.',
                    'I am looking for a job that requires my programming skills.',
                ]
            },
            projects:{
                title:'projects',
                links:{
                    details:'details',
                    git:'git repos.',
                    web: 'visit web'
                }
            },
            education:{
                title:'education',
                educationTypes:[
                    {
                        title:'higher education',
                        place:[{
                            name:'Kiev National Linguistic University',
                            descr: "master's degree on speciality English and literature",
                            year: '2012-2017',
                        }]
                    },
                    {
                        title:'courses',
                        place:[
                            {
                                name:'IT Education Academy (ITEA)',
                                descr: "Javascript base cours",
                                year: '2020',
                            },
                            {
                                name:'IT Education Academy (ITEA)',
                                descr: "Javascript advanced cours",
                                year: '2020',
                            },
                            {
                                name:'IT Education Academy (ITEA)',
                                descr: "React cours",
                                year: '2020',
                            }
                        ]
                    },
                ]
            },
            experience:{
                title:'work experience',
                place:[
                    {
                        name:'Freelance',
                        position:'English tutor',
                        period:'2017-2018'
                    },
                    {
                        name:'KidIT/ IT-school for kids',
                        position:'teacher',
                        period:'2018-2019'
                    },
                    {
                        name:'IT Family HUB/ IT-school for kids',
                        position:'teacher',
                        period:'2019-2021'
                    }]
            },
            footer:{
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint, atque repellendus soluta tenetur aperiam, necessitatibus ullam impedit itaque esse autem magni asperiores doloremque nemo. Dicta eius nulla expedita dolorum nemo'
            },
            details:{
                backBtn:'home',
                web:'visit web',
                git:' git repos.',
            }

        },
        ua:{
            header:{
                nav:{
                    projects:'проекти',
                    education:'освіта',
                    experience:'досвід',
                },
                langs:{
                    en:'анг',
                    ua:'укр'
                }
                
            },
            presentation:{
                position:'junior frontend програміст',
                about:[
                    'Відповідальний підхід до роботи',
                    'Пунктуальність',
                    'Вміння працювати в команді',
                    'Позитивний погляд на життя',
                    'Я шукаю роботу, де будуть потрібні мої навички програмування ',
                ]
            },
            projects:{
                title:'проекти',
                links:{
                    details:'детальніше',
                    git:'git репозит.',
                    web: 'відвідати веб-сайт'
                }
            },
            education:{
                title:'освіта',
                educationTypes:[
                    {
                        title:'Вища освіта',
                        place:[{
                            name:'Київський національний лінгвістичний університет',
                            descr: 'Диплом Магістра за спеціальністю "Англійська мова та література"',
                            year: '2012-2017',
                        }]
                    },
                    {
                        title:'Додаткова освіта',
                        place:[
                            {
                                name:'IT Education Academy (ITEA)',
                                descr: "Курс Javascript base",
                                year: '2020',
                            },
                            {
                                name:'IT Education Academy (ITEA)',
                                descr: "Курс Javascript advanced",
                                year: '2020',
                            },
                            {
                                name:'IT Education Academy (ITEA)',
                                descr: "Курс React",
                                year: '2020',
                            }
                        ]
                    },
                ]
            },
            experience:{
                title:'досвід роботи',
                place:[
                    {
                        name:'Фріланс',
                        position:'Репетитор з англійської мови',
                        period:'2017-2018'
                    },
                    {
                        name:'KidIT/ IT-школа для дітей',
                        position:'викладач',
                        period:'2018-2019'
                    },
                    {
                        name:'IT Family HUB / IT-школа для дітей',
                        position:'викладач',
                        period:'2019-2021'
                    }]
            },
            footer:{
                content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sint, atque repellendus soluta tenetur aperiam, necessitatibus ullam impedit itaque esse autem magni asperiores doloremque nemo. Dicta eius nulla expedita dolorum nemo'
            },
            details:{
                backBtn:'на головну',
                web:'відвідати веб-сайт',
                git:'GIT репозит.',
            }
        }
        
    }
}

export const langsSlice = createSlice({
    name:'langs',
    initialState,
    reducers:{
        setLangs:(state,action:PayloadAction<any>)=>{  
            console.log(action);
                   
            state.currentLang=action.payload;
            }    
    }
})


export const {setLangs} = langsSlice.actions;
export default langsSlice.reducer;