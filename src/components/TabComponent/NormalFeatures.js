import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import normalImage from '../../normal.png'
function NormalFeatures() {
    const [previousStillbirth, setPreviousStillbirth] = useState("");
    const [depression, setDepression] = useState("");
    const [trauma, setTrauma] = useState("");
    const [previousAbortion, setPreviousAbortion] = useState("");
    const [drugIntake, setDrugIntake] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [obesity, setObesity] = useState("");
    const [diabetes, setDiabetes] = useState("");
    const [thyroid, setThyroid] = useState("");
    const [hypertension, setHypertension] = useState("");
    const [kidneyDisease, setKidneyDisease] = useState("");
    const [urineBladderProblem, setUrineBladderProblem] = useState("");
    const [respiratoryProblem, setRespiratoryProblem] = useState("");
    const [cardioProblem, setCardioProblem] = useState("");
    const [geneticDisorder, setGeneticDisorder] = useState("");
    const [anemia, setAnemia] = useState("");
    const [waterBreak, setWaterBreak] = useState("");
    const [frequentDizziness, setFrequentDizziness] = useState("");
    const [familyHistory, setFamilyHistory] = useState("");
    const [res, setRes] = useState("")
    function error()
    {
        toast("Please select all the values!!",{style: {color: '#ffffff', background: '#ff9999',}});
    } 
    function success()
    {
        toast("Form Submitted",{style: {color: '#ffffff', background: 'rgb(240, 178, 241)',}});
    } 

    function handleFormForNormalFeatures(event) {
        event.preventDefault();
        // console.log(
        //     previousStillbirth,
        //     depression,
        //     trauma,
        //     previousAbortion,
        //     drugIntake,
        //     patientAge,
        //     obesity,
        //     diabetes,
        //     thyroid,
        //     hypertension,
        //     kidneyDisease,
        //     urineBladderProblem,
        //     respiratoryProblem,
        //     cardioProblem,
        //     geneticDisorder,
        //     anemia,
        //     waterBreak,
        //     frequentDizziness,
        //     familyHistory
        // );
        if (
            previousStillbirth &&
            depression &&
            trauma &&
            previousAbortion &&
            drugIntake &&
            patientAge &&
            obesity &&
            diabetes &&
            thyroid &&
            hypertension &&
            kidneyDisease &&
            urineBladderProblem &&
            respiratoryProblem &&
            cardioProblem &&
            geneticDisorder &&
            anemia &&
            waterBreak &&
            frequentDizziness &&
            familyHistory
        ) {
            success();
            let formData = {
                previousStillbirth: previousStillbirth,
                depression: depression,
                trauma: trauma,
                previousAbortion: previousAbortion,
                drugIntake: drugIntake,
                patientAge: patientAge,
                obesity: obesity,
                diabetes: diabetes,
                thyroid: thyroid,
                hypertension: hypertension,
                kidneyDisease: kidneyDisease,
                urineBladderProblem: urineBladderProblem,
                respiratoryProblem: respiratoryProblem,
                cardioProblem: cardioProblem,
                geneticDisorder: geneticDisorder,
                anemia: anemia,
                waterBreak: waterBreak,
                frequentDizziness: frequentDizziness,
                familyHistory: familyHistory,
            };
            console.log(formData);
            axios
                .post("https://flask-production-a1cc.up.railway.app/normalFeatures", formData)
                .then((response) => {
                    console.log(response.data.result);
                    setRes(response.data.result);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log("Empty form");
            error();
        }
    }

    return (
        <section className="max-w-screen-xl pt-32 mx-auto overflow-y-hidden">
            
        <div className="flex flex-col md:flex-row justify-evenly space-x-4 pb-4 px-12">
        <Toaster
        position="bottom-center"
        reverseOrder={false}
         />
         {
            !res?
         <div className="flex items-center justify-center"><img src={normalImage} width={250}></img></div>:""
         }
            
            <div className="bg-white mt-6 p-6 rounded-lg shadow-lg shadow-cyan-500/50">
            <h2 className="text-center text-2xl">Normal Features</h2>
                <p className="text-center pb-4">(Meant to be used by patients for checkup)</p>
                {
                    !res?
                <form className=" flex flex-col gap-2 text-sm">
                    <div className="flex flex-col md:flex-row justify-evenly gap-2">
                    <div className="flex flex-col gap-2 border p-2">
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Previous Stillbirth</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="previousStillbirth" onClick={(e)=>{setPreviousStillbirth(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="previousStillbirth" onClick={(e)=>{setPreviousStillbirth(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Depression</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="depression" onClick={(e)=>{setDepression(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="depression" onClick={(e)=>{setDepression(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Trauma</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" onClick={(e)=>{setTrauma(e.target.value)}} name="trauma" value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" onClick={(e)=>{setTrauma(e.target.value)}} name="trauma" value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Previous Abortion</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="previousAbortion" onClick={(e)=>{setPreviousAbortion(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="previousAbortion" onClick={(e)=>{setPreviousAbortion(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Drug Intake</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="drugIntake" onClick={(e)=>{setDrugIntake(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="drugIntake" onClick={(e)=>{setDrugIntake(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Patient Age</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input className="border w-20 hover:text-black px-2" type="number" name="patientAge" onChange={(e)=>{setPatientAge(e.target.value)}}/>
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Obesity</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="obesity" onClick={(e)=>{setObesity(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="obesity" onClick={(e)=>{setObesity(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Diabetes</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="diabetes" onClick={(e)=>{setDiabetes(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="diabetes" onClick={(e)=>{setDiabetes(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Thyroid</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="thyroid" onClick={(e)=>{setThyroid(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="thyroid" onClick={(e)=>{setThyroid(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Hypertension</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="hypertension" onClick={(e)=>{setHypertension(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="hypertension" onClick={(e)=>{setHypertension(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col gap-2 border p-2">
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Kidney Disease</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="kidneyDisease" onClick={(e)=>{setKidneyDisease(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="kidneyDisease" onClick={(e)=>{setKidneyDisease(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Urine Bladder Problem</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="urineBladderProblem" onClick={(e)=>{setUrineBladderProblem(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="urineBladderProblem" onClick={(e)=>{setUrineBladderProblem(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Respiratory Problem</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="respiratoryProblem" onClick={(e)=>{setRespiratoryProblem(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="respiratoryProblem" onClick={(e)=>{setRespiratoryProblem(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Cardio Problem</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="cardioProblem" onClick={(e)=>{setCardioProblem(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="cardioProblem" onClick={(e)=>{setCardioProblem(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Genetic Disorder</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="geneticDisorder" onClick={(e)=>{setGeneticDisorder(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="geneticDisorder" onClick={(e)=>{setGeneticDisorder(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Anemia</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="anemia" onClick={(e)=>{setAnemia(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="anemia" onClick={(e)=>{setAnemia(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Water Break</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="waterBreak" onClick={(e)=>{setWaterBreak(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="waterBreak" onClick={(e)=>{setWaterBreak(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Frequent Dizziness</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="frequentDizziness" onClick={(e)=>{setFrequentDizziness(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="frequentDizziness" onClick={(e)=>{setFrequentDizziness(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                        <p>Family History</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="familyHistory" onClick={(e)=>{setFamilyHistory(e.target.value)}} value="1" />
                            Yes
                            </label>
                            <label className="flex flex-row gap-2">
                            <input type="radio" name="familyHistory" onClick={(e)=>{setFamilyHistory(e.target.value)}} value="0" />
                            No
                            </label>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="flex justify-center">
                    <button type='submit' onClick={(event) => {handleFormForNormalFeatures(event)}} className='bg-gray-700 p-2 px-4 hover:bg-gray-500 text-white'>Submit</button>
                    </div>
                </form>
                :
                <div className="gap-2 flex flex-col">
                <p className="text-center">Chances of having stillbirth is
                {
                    res<30?
                    <p className="text-green-400">
                        {res} %
                    </p>
                    :
                    res<50?
                    <p className="text-yellow-600">
                        {res} %
                    </p>
                    :
                    <p className="text-red-500">
                        {res} %
                    </p>
                }
                </p>
                <div className="flex justify-center">
                <button className='bg-white text-black border p-2 hover:text-white hover:bg-black' type="button" onClick={() => {setRes("")}}>Re-calculate</button>
                </div>
                </div>
                }
            </div>
        </div>
        </section>
    );
}

export default NormalFeatures;
