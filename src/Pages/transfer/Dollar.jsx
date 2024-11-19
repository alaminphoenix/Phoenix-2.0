import React, { useEffect, useState } from "react";
import "./Transfer.css";
import UserNavbar from "../../Components/User navbar/UserNavbar";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue, update, set, push } from "firebase/database";
import { useSelector } from "react-redux";


const Dollar = () => {

    const [Offeers, setOffeers] = useState([])
    const db = getDatabase();
    //   useEffect(() => {
    //     const starCountRef = ref(db, 'MBminOfer/');
    //     onValue(starCountRef, (snapshot) => {

    //       let box = []
    //       snapshot.forEach((p) => {
    //         box.push({ ...p.val() })
    //       })

    //       setOffeers(box)


    //     });
    //   }, [])
    //updata

    // data of current user from redux
    const ClintData = useSelector((state) => state.info.userdata);

    // manage state
    const [category] = useState("5$ Dollar");
    const [categoryPhoto] = useState(
        "https://play-lh.googleusercontent.com/FxVO4tmAGRfxfbFqM2bumz5Y8FPwsymS1MJLAZ8UtM0DUKGywcBj7-LFZg6YNLRvGgtX"
    );
    const [account, setAccount] = useState("");
    const [paisa, setTaka] = useState(455);
    const [security, setSecurity] = useState("");
    const [securityFirebase, setSecurityFirebase] = useState("");

    // Pin of input
    const Pin = (e) => {
        setSecurity(e.target.value);
    };
    // Taka of input
    const Taka = (e) => {
        setTaka(e.target.value);
    };
    // number of input
    const AccountNumber = (e) => {
        setAccount(e.target.value);
    };

    // real time Clock
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        return strTime;
    }
    // real time Clock

    // date 
    const formatDate = (date) => {
        const month = date.getMonth() + 1;  // Months are 0-indexed, so add 1
        const day = date.getDate();
        const year = date.getFullYear();

        // Ensure single-digit days or months are padded with a leading zero
        const formattedMonth = month < 10 ? '0' + month : month;
        const formattedDay = day < 10 ? '0' + day : day;

        return `${formattedMonth}/${formattedDay}/${year}`;
    };

    const DATE = new Date();
    // date

    // firebase
    const goBack = useNavigate();




    const [allOfeers, setallOfeers] = useState([])

    const BkashSetData = () => {
        
        // Check if the given amount exceeds the current balance
        if (paisa > bortomanBL) {
            alert("Not sufficient balance");
            return;
        }
        if (security == securityFirebase.pin) {
            update(ref(db, "ClintList/" + ClintData.uid), {
                balance: newBALANCE
            });

            set(push(ref(db, "ListOfRequest/")), {
                time: formatAMPM(new Date()),
                dateOf: formatDate(DATE),
                clintId: ClintData?.uid,
                clintName: ClintData?.displayName,
                clintPhoto: ClintData?.photoURL,
                amount: paisa,
                methodOf: category,
                photoOfmethod: categoryPhoto,
                statuss: false,
                buttonDone: true,
                buttonPainding: true,
                ReturnStatus: false,
                ReturnStatusBG: true,

            });

            goBack("/");
        } else {
            alert("Wrong Pin");
        }
    };

    // security
    useEffect(() => {
        const starCountRef = ref(db, "ClintList/" + ClintData.uid);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setSecurityFirebase(data);
        });
    }, []);
    // security

    const [data, setData] = useState([]);
    const [userERbalance, setuserERbalance] = useState()
    const bortomanBL = userERbalance?.balance;
    const newBALANCE = bortomanBL - paisa;

    useEffect(() => {
        const starCountRef = ref(db, "ClintList/");
        onValue(starCountRef, (snapshot) => {
            const clintData = [];
            snapshot.forEach((BL) => {
                clintData.push({ ...BL.val(), key: BL.key });

            });

            setData(clintData);
        });
    }, []);
    useEffect(() => {
        data.map((item) => {
            if (item.key === ClintData.uid) {
                setuserERbalance(item);
            }
        });
    }, [data]);

    //updata

   


 



    return (
        <>
            <div className=" transferMain text-white ">
                <UserNavbar />
                <div className="px-2 md:px-[100px]">
                    

                    {/* bundel updete by admin*/}

                    <div className="w-full ">

                        {/* <div
                  
                  className={`w-full bg-[#ff8c34] p-1 font-bold rounded-xl mt-3 pl-1`}
                >
                  <div className="flex flex-wrap text-[14px] gap-2">
                    <p className="text-[#000]">p1</p>
                    <p className="text-[#ffc12f]">p2</p>
                    <p className="text-[#64fff2]">p3</p>
                    <p className="text-[#c340ff]">p4</p>
                    <p>p5</p>
                  </div>
                </div> */}


                        <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-lg shadow-md w-full">
                            <h1 className="text-5xl font-bold text-center text-gray-800">$5</h1>
                            <h1 className="text-3xl font-bold text-center text-gray-800">455.BDT</h1>
                            <p className="mt-1 text-gray-600 text-center">
                                Bangladesh -400mnts
                            </p>
                            <p className="mt-1 text-gray-600 text-center">
                                Bangladesh -400mnts
                            </p>
                            <p className="mt-1 text-gray-600 text-center">
                                Bangladesh -400mnts
                            </p>
                            <p className="mt-1 text-gray-600 text-center">
                                Bangladesh -400mnts
                            </p>
                            
                        </div>








                    </div>

                    {/* bundel updete by admin*/}

                    <div className=" w-full mt-5">
                        <input
                            onChange={Pin}
                            className=" pinPlace border outline-none text-purple-700 amount pl-5 w-full h-[50px] text-[45px]  rounded-md "
                            type="number"
                            placeholder="  *    *    *    *   "
                        />
                    </div>

                    <button onClick={BkashSetData} className=" w-full bg-white text-blue-700 mt-10 rounded-lg font-bold hover:scale-95 active:scale-100 transition-all py-4 ">
                        {" "}
                        Send{" "}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Dollar;
