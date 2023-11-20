import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import advancedImage from '../../advanced.png'
function AdvancedFeatures() {
    const [placentalAbruption, setPlacentalAbruption] = useState(false);
    const [neurologicalDisease, setNeurologicalDisease] = useState(false);
    const [endocrinalIssues, setEndocrinalIssues] = useState(false);
    const [highBP, setHighBP] = useState(false);
    const [congenitalRebulla, setCongenitalRebulla] = useState(false);
    const [cordProlapse, setCordProlapse] = useState(false);
    const [infection, setInfection] = useState('');
    const [bloodClottingDisorder, setBloodClottingDisorder] = useState(false);
    const [oligohydramnios, setOligohydramnios] = useState(false);
    const [umbilicalCordInfection, setUmbilicalCordInfection] = useState(false);
    const [groupBInfection, setGroupBInfection] = useState(false);
    const [multipleGestations, setMultipleGestations] = useState(false);
    const [fetalMovement, setFetalMovement] = useState('');
    const [fetalHeartbeat, setFetalHeartbeat] = useState('');
    const [gestationAge, setGestationAge] = useState('');
    const [placentalWeight, setPlacentalWeight] = useState('');
    const [fetusWeight, setFetusWeight] = useState('');
    const [res, setRes] = useState("")
    function error() {
        toast("Please select all the values!!", { style: { color: '#ffffff', background: '#ff9999', } });
    }
    function success() {
        toast("Form Submitted", { style: { color: '#ffffff', background: 'rgb(240, 178, 241)', } });
    }
    function handleFormForAdvancedFeatures(event) {
        event.preventDefault();
        console.log(
            placentalAbruption,
            neurologicalDisease,
            endocrinalIssues,
            highBP,
            congenitalRebulla,
            cordProlapse,
            infection,
            bloodClottingDisorder,
            oligohydramnios,
            umbilicalCordInfection,
            groupBInfection,
            multipleGestations,
            fetalMovement,
            fetalHeartbeat,
            gestationAge,
            placentalWeight,
            fetusWeight
        );
        if (
            placentalAbruption &&
            neurologicalDisease &&
            endocrinalIssues &&
            highBP &&
            congenitalRebulla &&
            cordProlapse &&
            infection &&
            bloodClottingDisorder &&
            oligohydramnios &&
            umbilicalCordInfection &&
            groupBInfection &&
            multipleGestations &&
            fetalMovement &&
            fetalHeartbeat &&
            gestationAge &&
            placentalWeight &&
            fetusWeight
        ) {
            success();
            let formData = {
                placentalAbruption: placentalAbruption,
                neurologicalDisease: neurologicalDisease,
                endocrinalIssues: endocrinalIssues,
                highBP: highBP,
                congenitalRebulla: congenitalRebulla,
                cordProlapse: cordProlapse,
                infection: infection,
                bloodClottingDisorder: bloodClottingDisorder,
                oligohydramnios: oligohydramnios,
                umbilicalCordInfection: umbilicalCordInfection,
                groupBInfection: groupBInfection,
                multipleGestations: multipleGestations,
                fetalMovement: fetalMovement,
                fetalHeartbeat: fetalHeartbeat,
                gestationAge: gestationAge,
                placentalWeight: placentalWeight,
                fetusWeight: fetusWeight
            };
            console.log(formData);
            axios
                .post("https://flask-production-a1cc.up.railway.app/advancedFeatures", formData)
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
            <div className="flex justify-evenly space-x-4 pb-4 px-12 md:flex-row-reverse flex-col">
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                {
                    !res?
                 <div className="flex items-center"><img src={advancedImage}></img></div>:""
                }
                <div className="bg-white mt-6 p-6 w-full rounded-lg shadow-lg shadow-cyan-500/50">
                    <h2 className="text-center text-2xl">Advanced Features</h2>
                    <p className="text-center pb-4">(Meant to be used by doctors for checkup)</p>
                    {
                        !res ?
                            <form className=" flex flex-col gap-2">
                                <div className="flex flex-col justify-evenly md:flex-row md:gap-0 gap-2">
                                    <div className="flex flex-col gap-2 border p-2">
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Placental Abruption</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="placentalAbruption" onClick={(e) => { setPlacentalAbruption(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="placentalAbruption" onClick={(e) => { setPlacentalAbruption(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Neurological Disease</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="neurologicalDisease" onClick={(e) => { setNeurologicalDisease(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="neurologicalDisease" onClick={(e) => { setNeurologicalDisease(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Endocrinal Issues</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="endocrinalIssues" onClick={(e) => { setEndocrinalIssues(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="endocrinalIssues" onClick={(e) => { setEndocrinalIssues(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>High BP</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="highBP" onClick={(e) => { setHighBP(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="highBP" onClick={(e) => { setHighBP(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Congenital Rebulla</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="congenitalRebulla" onClick={(e) => { setCongenitalRebulla(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="congenitalRebulla" onClick={(e) => { setCongenitalRebulla(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Cord Prolapse</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="cordProlapse" onClick={(e) => { setCordProlapse(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="cordProlapse" onClick={(e) => { setCordProlapse(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Infection</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="infection" onClick={(e) => { setInfection(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="infection" onClick={(e) => { setInfection(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Blood Clotting Disorder</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="bloodClottingDisorder" onClick={(e) => { setBloodClottingDisorder(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="bloodClottingDisorder" onClick={(e) => { setBloodClottingDisorder(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Oligohydramnios</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="oligohydramnios" onClick={(e) => { setOligohydramnios(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="oligohydramnios" onClick={(e) => { setOligohydramnios(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 border p-2">
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Umbilical Cord Infection</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="umbilicalCordInfection" onClick={(e) => { setUmbilicalCordInfection(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="umbilicalCordInfection" onClick={(e) => { setUmbilicalCordInfection(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Group B Infection</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="groupBInfection" onClick={(e) => { setGroupBInfection(e.target.value) }} value="1" />
                                                    Yes
                                                </label>
                                                <label className="flex flex-row gap-2">
                                                    <input type="radio" name="groupBInfection" onClick={(e) => { setGroupBInfection(e.target.value) }} value="0" />
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Multiple Gestations</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="number" placeholder="2 or 3" className="border w-24 hover:text-black px-2" name="multipleGestations" onChange={(e) => { setMultipleGestations(e.target.value) }} />
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Fetal Movement</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="number" className="border w-24 hover:text-black px-2" name="fetalMovement" onChange={(e) => { setFetalMovement(e.target.value) }} />
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Fetal Heartbeat</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="number" placeholder="in bpm" className="border w-24 hover:text-black px-2" name="fetalHeartbeat" onChange={(e) => { setFetalHeartbeat(e.target.value) }} />
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Gestation Age</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="number" placeholder="age" className="border w-24 hover:text-black px-2" name="gestationAge" onChange={(e) => { setGestationAge(e.target.value) }} />
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Placental Weight</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="number" placeholder="in grams" className="border w-24 hover:text-black px-2" name="placentalWeight" onChange={(e) => { setPlacentalWeight(e.target.value) }} />
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full justify-between px-8 hover:shadow-xl  hover:bg-gray-700 hover:text-white transition-all duration-150 rounded-xl p-1">
                                            <p>Fetus Weight</p>
                                            <div className="flex gap-4 md:flex-row flex-col">
                                                <label className="flex flex-row gap-2">
                                                    <input type="number" placeholder="in kg" className="border w-24 hover:text-black px-2" name="fetusWeight" onChange={(e) => { setFetusWeight(e.target.value) }} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button type='submit' onClick={(event) => { handleFormForAdvancedFeatures(event) }} className='bg-gray-700 p-2 px-4 hover:bg-gray-500 text-white'>Submit</button>
                                </div>
                            </form>
                            :
                            <div className="gap-2 flex flex-col">
                                <p className="text-center">Chances of having stillbirth is
                                    {
                                        res < 30 ?
                                            <p className="text-green-400">
                                                {res} %
                                            </p>
                                            :
                                            res < 50 ?
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
                                    <button className='bg-white text-black border p-2 hover:text-white hover:bg-black' type="button" onClick={() => { setRes("") }}>Re-calculate</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default AdvancedFeatures;
