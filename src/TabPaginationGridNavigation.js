import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box, Button, Collapse,TextField,Grid,styled,Paper,Autocomplete,MenuItem,InputLabel,Select,FormControl,Accordion,AccordionSummary,
    AccordionDetails,Typography,Tooltip
 } from '@mui/material';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import axios from "axios";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
//import { makeStyles } from '@mui/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  /*const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 600,
      margin: 'auto',
      marginTop: '2',
      padding: '2',
    },
    panel: {
      padding: '2',
      marginBottom: '2',
    },
  }));*/
const TabPaginationGridNavigation = () => {
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

    const topLocations = [
        { label: 'Value1', year: 1994 },
        { label: 'Expleo', year: 1972 },
        { label: 'Prince', year: 1974 },
        { label: 'Mepz', year: 2008 },
        { label: 'Pune', year: 1957 },
        { label: "Bangalore", year: 1993 },
        { label: 'Belgium', year: 1994 }];
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
    const [expanded, setExpanded] = useState(true);
    const [expandedinfo2, setExpandedinfo2] = useState(true);
    const [expandedinfo3, setExpandedinfo3] = useState(true);
  
    const handleExpandClick = () => { 
      setExpanded(!expanded);
    };
    const handleExpandClickinfo2 = () => { 
        setExpandedinfo2(!expandedinfo2);
      };
      const handleExpandClickinfo3 = () => { 
        setExpandedinfo3(!expandedinfo3);
      };

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
    if(e.target.value<=api.length){
    setCurrentPage(e.target.value);
    } else {
       setCurrentPage(1);
    }
   }
   const handleChangePaymentEvent=(e)=>{
    if(e.target.value<=currentPosts[0].payment.length){
    setPaymentCurrentPage(e.target.value);
    } else {
        setPaymentCurrentPage(1);
    }
   }
   const handleChangeTransactionEvent=(e)=>{
    if(e.target.value<=currentPosts[0].transaction.length){
    setTransactionCurrentPage(e.target.value);
    } else {
        setTransactionCurrentPage(1);
    }
   }

    const handlePrevious = () => {
        setValue((prev) => (prev - 1 + tabs.length) % tabs.length);
        //setPage(1)
    };

    const [age, setAge] = React.useState('');

    const handleChangeDropdown = (event) => {
      setAge(event.target.value);
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
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateBeforeIcon color={"primary"} fontSize="large"  onClick={(currentPage!=1)?handleDecrement:undefined} /></div>&nbsp;

                            <div style={{ width: "62px", height: "38px" }}>
                                <TextField
                                    label=""
                                    size='small'
                                    onChange={handleChangeEvent}
                                    variant='outlined'
                                    value={currentPage}
                                /> </div><div style={{height: "38px",margin:"10px"}}>of {api.length}</div>
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateNextIcon color={"primary"} fontSize="large" onClick={(currentPage!=api.length)?handleIncrement:undefined} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><LastPageIcon color={"primary"} fontSize="large" onClick={handleLast} /></div>
                        </div>}

                        {value === 1 && <div key={index} style={{ "display": "flex" }}>
                            <div style={{ border: "1px solid gray", height: "38px" }}><FirstPageIcon fontSize="large"color={"primary"}  onClick={handleFirstPayment} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateBeforeIcon fontSize="large" color={"primary"} onClick={(paymentCurrentPage!=1)?handlePaymentDecrement:undefined} /></div>&nbsp;

                            <div style={{ width: "62px", height: "38px" }}>
                                <TextField
                                    label=""
                                    size='small'
                                    onChange={handleChangePaymentEvent}
                                    variant='outlined'
                                    value={paymentCurrentPage}
                                /></div>
                                <div style={{height: "38px",margin:"10px"}}>of {currentPosts[0].payment.length}</div>
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateNextIcon color={"primary"} fontSize="large" onClick={(paymentCurrentPage!=currentPosts[0].payment.length)?handlePaymentIncrement:undefined} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><LastPageIcon color={"primary"} fontSize="large" onClick={handleLastPayment} /></div>
                        </div>}

                        {value === 2 && <div key={index} style={{ "display": "flex" }}>
                            <div style={{ border: "1px solid gray", height: "38px" }}><FirstPageIcon color={"primary"} fontSize="large" onClick={handleFirstTransaction} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateBeforeIcon color={"primary"} fontSize="large" onClick={(transactionCurrentPage!=1)?handleTransactionDecrement:undefined} /></div>&nbsp;

                            <div style={{ width: "62px", height: "38px" }}>
                                <TextField
                                    label=""
                                    size='small'
                                    onChange={handleChangeTransactionEvent}
                                    variant='outlined'
                                    value={transactionCurrentPage}
                                /></div>
                                <div style={{height: "38px",margin:"10px"}}>of {currentPosts[0].transaction.length}</div>
                            <div style={{ border: "1px solid gray", height: "38px" }}><NavigateNextIcon color={"primary"} fontSize="large" onClick={(transactionCurrentPage!=currentPosts[0].transaction.length)?handleTransactionIncrement:undefined} /></div>&nbsp;
                            <div style={{ border: "1px solid gray", height: "38px" }}><LastPageIcon color={"primary"} fontSize="large" onClick={handleLastTransaction} /></div>
                        </div>}

                        {value === 3 && (
                            currentPostsTransaction.map((val) => (
<Grid key={val.name} container spacing={1}>
        <Grid item xs={6}>
       <div style={{textAlign:"right"}}> {(!expanded) && <span style={{marginTop:"-6px"}}>Payment info 1</span>}
       <Tooltip title="Payment info 1">
        {expanded ? <VisibilityIcon onClick={handleExpandClick} /> : <VisibilityOffIcon onClick={handleExpandClick} />}
        </Tooltip>
      </div>
                               <div>
                                    <Paper elevation={0} >
      <Collapse in={expanded}>
          <Typography variant="body1">
          <Grid item xs={12}>
        <Box component="fieldset" sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 1</legend>
          <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}>
            <TextField size='small' label="Name" defaultValue={val.name} />&nbsp;&nbsp;<TextField size='small' defaultValue={val.amount} label="Amount" />&nbsp;&nbsp;<TextField size='small' label="Acc No." />&nbsp;&nbsp;<TextField size='small' label="Address" />&nbsp;&nbsp;
           </div>
           </Paper>
           </Box>
           </Grid>
          </Typography>
      </Collapse>
    </Paper></div>

    <div style={{textAlign:"right"}}>{(!expandedinfo2) && <span style={{marginTop:"-6px"}}>Payment info 3</span>}
    <Tooltip title="Payment info 3"> 
        {expandedinfo2 ? <VisibilityIcon onClick={handleExpandClickinfo2} /> : <VisibilityOffIcon onClick={handleExpandClickinfo2} />}
      </Tooltip>
      </div>
    <div>
                                    <Paper elevation={0} >
      <Collapse in={expandedinfo2}>
          <Typography variant="body1">
          <Grid item xs={12}>
        <Box component="fieldset" sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 3</legend>
          <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}>
            <TextField size='small' label="Name" defaultValue={val.name} />&nbsp;&nbsp;<TextField size='small' defaultValue={val.amount} label="Amount" />&nbsp;&nbsp;<TextField size='small' label="Acc No." />&nbsp;&nbsp;<TextField size='small' label="Address" />&nbsp;&nbsp;
           </div>
           </Paper>
           </Box>
           </Grid>
          </Typography>
      </Collapse>
    </Paper></div>

                 </Grid>
                 <Grid item xs="6">
                 <div style={{textAlign:"right"}}> {(!expandedinfo3) && <span style={{marginTop:"-6px"}}>Payment info 2</span>}
                 <Tooltip title="Payment info 2"> 
        {expandedinfo3 ? <VisibilityIcon onClick={handleExpandClickinfo3} /> : <VisibilityOffIcon onClick={handleExpandClickinfo3} />}
      </Tooltip>
      </div>
    <div>
                                    <Paper elevation={0} >
      <Collapse in={expandedinfo3}>
          <Typography variant="body1">
          <Grid item xs={12}>
        <Box component="fieldset" sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 2</legend>
          <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}>
            <TextField size='small' label="Name" defaultValue={val.name} />&nbsp;&nbsp;<TextField size='small' defaultValue={val.amount} label="Amount" />&nbsp;&nbsp;<TextField size='small' label="Acc No." />&nbsp;&nbsp;<TextField size='small' label="Address" />&nbsp;&nbsp;
           </div>
           </Paper>
           </Box>
           </Grid>
          </Typography>
      </Collapse>
    </Paper></div>

                 </Grid>
                 
                 
                 </Grid>                   
                              

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

                                <Grid key={val.name} container spacing={1}>
        <Grid item xs={6}>
        <Accordion sx={{boxShadow:"none"}} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:"lightgrey",borderRadius:"4px"}}
        >
            <Typography>Payment Info 1</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:0}}>
          <Typography>
            <Grid item xs={12}>
        <Box component="fieldset" sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 1</legend>
          <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}>
            <TextField size='small' label="Name" defaultValue={val.name} />&nbsp;&nbsp;<TextField size='small' defaultValue={val.amount} label="Amount" />&nbsp;&nbsp;<TextField size='small' label="Acc No." />&nbsp;&nbsp;<TextField size='small' label="Address" />&nbsp;&nbsp;
           </div>
           </Paper>
           </Box>
           </Grid>
           </Typography>
           </AccordionDetails>
           </Accordion>


           <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:"lightgrey",borderRadius:"4px"}}
        >
            <Typography>Payment Info 3</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:0}}>
          <Typography>
            <Grid item xs={12}>
              <Box component="fieldset" sx={{ borderRadius: '6px' }}>
                <legend style={{ color: '#1976d2', textAlign: 'left' }}>
                  Payment Info 3
                </legend>

                <Paper sx={{ padding: '15px', margin: '6px' }} elevation={0}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      padding: '6px',
                      marginLeft: '6px',
                      rowGap: '10px',
                    }}
                  >
                    <TextField size="small" label="input 1" />
                    &nbsp;&nbsp;
                    <TextField size="small" label="input 2" />
                    &nbsp;&nbsp;
                    <TextField size="small" label="input 3" />
                    &nbsp;&nbsp;
                    <TextField size="small" label="input 4" />
                    &nbsp;&nbsp;
                  </div>
                </Paper>
              </Box>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:"lightgrey",borderRadius:"4px"}}
        >
            <Typography>Payment Info 5</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:0}}>
          <Typography>
            <Grid item xs={12}>
        <Box component="fieldset"  sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 5</legend>
          
        <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}>
            <Grid item xs={4}>
           <Autocomplete
      freeSolo
      id="box-locations"
      options={topLocations}
     size='small'
     
      renderInput={(params) => <TextField {...params} label="Locations" />}
    /></Grid>&nbsp;&nbsp;
    <Grid item xs={4}>
<FormControl sx={{ width:"100%"}}>
<InputLabel sx={{marginTop:"-5px"}}  id="demo-simple-select-autowidth-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChangeDropdown}
          autoWidth
          label="Select"
          size='small'
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Value1</MenuItem>
          <MenuItem value={21}>Value2</MenuItem>
          <MenuItem value={22}>Value3</MenuItem>
        </Select></FormControl></Grid>&nbsp;&nbsp;&nbsp;
            <TextField size='small' label="input 1" />&nbsp;&nbsp;
            <TextField size='small' label="input 2" />&nbsp;&nbsp;
           
            
           </div>
           </Paper>
           </Box>
           </Grid>
           </Typography>
           </AccordionDetails>
           </Accordion>


        </Grid>

        
        
        <Grid item xs={6}>
        <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:"lightgrey",borderRadius:"4px"}}
        >
            <Typography>Payment Info 2</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:0}}>
          <Typography>
            <Grid item xs={12}>
        <Box component="fieldset"  sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 2</legend>
          
        <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}><TextField size='small' label="input 1" />&nbsp;&nbsp;<TextField size='small' label="input 2" />&nbsp;&nbsp;<TextField size='small' label="input 3" />&nbsp;&nbsp;<TextField size='small' label="input 4" />&nbsp;&nbsp;
           </div>
           </Paper>
           </Box>
           </Grid>
           </Typography>
           </AccordionDetails>
           </Accordion>

           <Accordion sx={{boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{backgroundColor:"lightgrey",borderRadius:"4px",height:"10px"}}
        >
            <Typography>Payment Info 4</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:0}}>
          <Typography>
            <Grid item xs={12}>
        <Box component="fieldset"  sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 4</legend>
        <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}><TextField size='small' label="input 1" />&nbsp;&nbsp;<TextField size='small' label="input 2" />&nbsp;&nbsp;<TextField size='small' label="input 3" />&nbsp;&nbsp;<TextField size='small' label="input 4" />&nbsp;&nbsp;
           </div>
           </Paper>
           </Box>
           </Grid>
           </Typography>
           </AccordionDetails>
           </Accordion>

        </Grid>






        <Grid item xs={6}> 
        
        {/*<Box component="fieldset"  sx={{borderRadius:"6px"}}>
        <legend style={{color:"#1976d2",textAlign:"left"}}>Payment Info 3</legend>
          
        <Paper sx={{padding:"15px",margin:"6px"}} elevation={0}>
           <div style={{display:"flex",flexWrap:"wrap",padding:"6px",marginLeft:"6px",rowGap:"10px"}}><TextField size='small' label="input 1" />&nbsp;&nbsp;<TextField size='small' label="input 2" />&nbsp;&nbsp;<TextField size='small' label="input 3" />&nbsp;&nbsp;<TextField size='small' label="input 4" />&nbsp;&nbsp;
           </div>
           </Paper>
           </Box>*/}
        </Grid>
        <Grid item xs={6}>
        
        </Grid>
        <Grid item xs={6}>
        
        </Grid>
      </Grid>

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

export default TabPaginationGridNavigation;
