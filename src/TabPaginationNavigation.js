import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Button, TextField } from '@mui/material';
//import axios from "axios";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const TabPaginationNavigation = () => {
    let obj = [
        {
            "name": "test", "address": "chennai", "age": 30, "payment": [{ "id": 1, "name": "paytest11", "amount": 120 }, { "id": 2, "name": "paytest12", "amount": 130 }],
            "transaction": [{ "id": 1, "name": "transactiontest11", "amount": 123 }, { "id": 1, "name": "transactiontest12", "amount": 123 }]
        },
        {
            "name": "test1", "address": "chennai1", "age": 31, "payment": [{ "id": 1, "name": "paytest21", "amount": 120 }, { "id": 2, "name": "paytest22", "amount": 130 }],
            "transaction": [{ "id": 1, "name": "transactiontest21", "amount": 123 }, { "id": 1, "name": "transactiontest22", "amount": 123 }]
        },
        {
            "name": "test2", "address": "chennai2", "age": 32, "payment": [{ "id": 1, "name": "paytest31", "amount": 120 }, { "id": 2, "name": "paytest32", "amount": 130 }],
            "transaction": [{ "id": 1, "name": "transactiontest31", "amount": 123 }, { "id": 1, "name": "transactiontest32", "amount": 123 }]
        }
    ];
    const [value, setValue] = useState(0);
    const tabs = ['Group Header', 'Payment', 'Transaction', 'Tab Four'];
    //const [page, setPage] = useState(1);
    const [api, setApi] = useState(obj);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = api.slice(indexOfFirstPost, indexOfLastPost);

    const [paymentCurrentPage, setPaymentCurrentPage] = useState(1);
    const indexOfLastPostPayment = paymentCurrentPage * postsPerPage;
    const indexOfFirstPostPayment = indexOfLastPostPayment - postsPerPage;
    const currentPostsPayment = currentPosts[0]?.payment.slice(indexOfFirstPostPayment, indexOfLastPostPayment);

    const [transactionCurrentPage, setTransactionCurrentPage] = useState(1);
    const indexOfLastPostTransaction = transactionCurrentPage * postsPerPage;
    const indexOfFirstPostTransaction = indexOfLastPostTransaction - postsPerPage;
    const currentPostsTransaction = currentPosts[0]?.transaction.slice(indexOfFirstPostTransaction, indexOfLastPostTransaction);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFirst=()=>{
        setCurrentPage(1);
    }
    const handleLast=()=>{
        setCurrentPage(api.length);
    }

    const handleFirstPayment=()=>{
        setPaymentCurrentPage(1);
    }
    const handleLastPayment=()=>{
        setPaymentCurrentPage(currentPosts[0].payment.length);
    }

    const handleFirstTransaction=()=>{
        setTransactionCurrentPage(1);
    }
    const handleLastTransaction=()=>{
        setTransactionCurrentPage(currentPosts[0].transaction.length);
    }

    const handleIncrement = () => {
        setCurrentPage(currentPage + 1);
    }
    const handleDecrement = () => {
        setCurrentPage(currentPage - 1);
    }

    const handlePaymentIncrement = () => {
        setPaymentCurrentPage(paymentCurrentPage + 1);
    }
    const handlePaymentDecrement = () => {
        setPaymentCurrentPage(paymentCurrentPage - 1);
    }

    const handleTransactionIncrement = () => {
        setTransactionCurrentPage(transactionCurrentPage + 1);
    }
    const handleTransactionDecrement = () => {
        setTransactionCurrentPage(transactionCurrentPage - 1);
    }

    const handleNext = () => {
        setValue((prev) => (prev + 1) % tabs.length);
        //setPage(1);
    };
   const handleChangeEvent=(e)=>{
    setCurrentPage(e.target.value);
   }
   const handleChangePaymentEvent=(e)=>{
    setPaymentCurrentPage(e.target.value);
   }
   const handleChangeTransactionEvent=(e)=>{
    setTransactionCurrentPage(e.target.value);
   }

    const handlePrevious = () => {
        setValue((prev) => (prev - 1 + tabs.length) % tabs.length);
        //setPage(1)
    };



    useEffect(() => {
        /*const handleFetchData = async () => {
            const resData = await axios.get(
              `https://jsonplaceholder.typicode.com/todos?_page=${page}`
            );
            const data = await resData.data;
            setApi(data);
          };
        handleFetchData();*/
    }, []);


    return (
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange}>
                {tabs.map((label, index) => (
                    <Tab key={index} label={label} />
                ))}
            </Tabs>

            <Box sx={{ mt: 2 }}>
                {tabs.map((label, index) => (
                    <Box
                        key={index}
                        role="tabpanel"
                        hidden={value !== index}
                        id={`tabpanel-${index}`}
                        aria-labelledby={`tab-${index}`}
                    >

                        {value === 0 && <div key={index} style={{ "display": "flex" }}>
                            <div style={{ border: "1px solid gray", height: "38px" }}>
                                <FirstPageIcon fontSize="large" color={"primary"} onClick={handleFirst} />
                                
                                </div> &nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateBeforeIcon color={"primary"} fontSize="large" onClick={handleDecrement} /></div>&nbsp;

                            <div style={{ width: "62px", height: "38px" }}>
                                <TextField
                                    label=""
                                    size='small'
                                    onChange={handleChangeEvent}
                                    variant='outlined'
                                    value={currentPage}
                                /> </div><div style={{height: "38px",margin:"10px"}}>of {api.length}</div>
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateNextIcon color={"primary"} fontSize="large" onClick={handleIncrement} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><LastPageIcon color={"primary"} fontSize="large" onClick={handleLast} /></div>
                        </div>}

                        {value === 1 && <div key={index} style={{ "display": "flex" }}>
                            <div style={{ border: "1px solid gray", height: "38px" }}><FirstPageIcon fontSize="large"color={"primary"}  onClick={handleFirstPayment} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateBeforeIcon fontSize="large" color={"primary"} onClick={handlePaymentDecrement} /></div>&nbsp;

                            <div style={{ width: "62px", height: "38px" }}>
                                <TextField
                                    label=""
                                    size='small'
                                    onChange={handleChangePaymentEvent}
                                    variant='outlined'
                                    value={paymentCurrentPage}
                                /></div>
                                <div style={{height: "38px",margin:"10px"}}>of {currentPosts[0].payment.length}</div>
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateNextIcon color={"primary"} fontSize="large" onClick={handlePaymentIncrement} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><LastPageIcon color={"primary"} fontSize="large" onClick={handleLastPayment} /></div>
                        </div>}

                        {value === 2 && <div key={index} style={{ "display": "flex" }}>
                            <div style={{ border: "1px solid gray", height: "38px" }}><FirstPageIcon color={"primary"} fontSize="large" onClick={handleFirstTransaction} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateBeforeIcon color={"primary"} fontSize="large" onClick={handleTransactionDecrement} /></div>&nbsp;

                            <div style={{ width: "62px", height: "38px" }}>
                                <TextField
                                    label=""
                                    size='small'
                                    onChange={handleChangeTransactionEvent}
                                    variant='outlined'
                                    value={transactionCurrentPage}
                                /></div>
                                <div style={{height: "38px",margin:"10px"}}>of {currentPosts[0].transaction.length}</div>
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateNextIcon color={"primary"} fontSize="large" onClick={handleTransactionIncrement} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><LastPageIcon color={"primary"} fontSize="large" onClick={handleLastTransaction} /></div>
                        </div>}

                        {value === 3 && (
                            currentPostsTransaction.map((val) => (

                                <div key={val.name} style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        placeholder='Name'
                                        
                                    /><br />
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        placeholder='Amount'
                                    />
                                    
                                </div>

                            ))
                        )}


                        {value === 2 && (
                            currentPostsTransaction.map((val) => (

                                <div key={val.name} style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        defaultValue={val.name}
                                    /><br />
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        defaultValue={val.amount}
                                    />
                                    
                                </div>

                            ))
                        )}


                        {value === 1 && (
                            currentPostsPayment.map((val) => (

                                <div key={val.name} style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        defaultValue={val.name}
                                    /><br />
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        defaultValue={val.amount}
                                    />
                                    
                                </div>

                            ))
                        )}
                       
                        {value === 0 && (
                            currentPosts.map((val) => (

                                <div key={val.name} style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        defaultValue={val.name}
                                    /><br />
                                    <TextField

                                        label=""
                                        size='small'
                                        type="text"
                                        defaultValue={val.age}
                                    /><br />
                                    <TextField
                                        label=""
                                        size='small'
                                        type="text"
                                        defaultValue={val.address}

                                    />
                                </div>

                            ))
                        )}


                    </Box>
                ))}
            </Box>
            <br />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" onClick={handlePrevious} disabled={value === 0}>
                    Previous
                </Button>
                <Button variant="contained" onClick={handleNext} disabled={value === tabs.length - 1}>
                    Next
                </Button>
            </Box>



        </Box>
    );
};

export default TabPaginationNavigation;
