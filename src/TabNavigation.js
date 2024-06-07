import React, { useState,useEffect } from 'react';
import { Tabs, Tab, Box, Button,Pagination,PaginationItem } from '@mui/material';
import axios from "axios";
//import { List, Tag, ListItem, Divider } from "@chakra-ui/core";
//import { Pagination } from "@material-ui/lab";
//import usePagination from "./Pagenation";
//import { default as data } from "./mock-data.json";

const TabNavigation = () => {
  const [value, setValue] = useState(0);
  const tabs = ['Tab One', 'Tab Two', 'Tab Three', 'Tab Four'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1);
  };

  const handleNext = () => {
    setValue((prev) => (prev + 1) % tabs.length);
    setPage(1);
  };

  const handlePrevious = () => {
    setValue((prev) => (prev - 1 + tabs.length) % tabs.length);
    setPage(1)
  };

  const [page, setPage] = useState(1);
  const [api, setApi] = useState([]);
  useEffect(() => {
    handleFetchData();
  }, [page,value]);
  const handleFetchData = async () => {
    const resData = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}`
    );
    const data = await resData.data;
    //console.log("datas", data);
    setApi(data);
  };
/*
  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handlePageChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
*/


  return (
    <Box sx={{ width: '100%' }}>
      
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
      
      <Box sx={{ mt: 2 }}>
      {/*<Pagination
        count={10}
        color="primary"
        onChange={(event, value) => setPage(value)}
        page={page}
      />*/}
      <Pagination
      count={10}
      page={page}
      onChange={(event, value) => setPage(value)}
      renderItem={(item) => (
        <PaginationItem
          component={""}
          {...item}
        />
      )}
      boundaryCount={2}
      siblingCount={1}
      variant="outlined"
      shape="rounded"
      showFirstButton
      showLastButton
      firstPageText="First"
      lastPageText="Last"
      nextButtonText="Next"
      prevButtonText="Previous"
    />
    <br />
        {tabs.map((label, index) => (
          <Box
            key={index}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            {value === 0 && (
              api.map((val) => (
                <>
                  <div style={{padding:"8px",color:"white",backgroundColor:"gray",margin:"3px",textAlign:"center"}}>{val.title}</div>
                </>
              ))
            )}

{value === 1 && (
              api.map((val) => (
                <>
                  <div style={{padding:"8px",color:"white",backgroundColor:"gray",margin:"3px"}}>{val.title}</div>
                </>
              ))
            )}

{value === 2 && (
              api.map((val) => (
                <>
                  <div style={{padding:"8px",color:"white",backgroundColor:"gray",margin:"3px"}}>{val.title}</div>
                </>
              ))
            )}

{value === 3 && (
              api.map((val) => (
                <>
                  <div style={{padding:"8px",color:"white",backgroundColor:"gray",margin:"3px"}}>{val.title}</div>
                </>
              ))
            )}

          </Box>
        ))}
      </Box>
      <br />
      <Pagination
      count={10}
      page={page}
      onChange={(event, value) => setPage(value)}
      renderItem={(item) => (
        <PaginationItem
          component={""}
          {...item}
        />
      )}
      boundaryCount={2}
      siblingCount={1}
      variant="outlined"
      shape="rounded"
      showFirstButton
      showLastButton
      firstPageText="First"
      lastPageText="Last"
      nextButtonText="Next"
      prevButtonText="Previous"
    />
      <Box sx={{ display: 'flex',justifyContent:'space-between',  mt: 2 }}>
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

export default TabNavigation;
