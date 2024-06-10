import React, { useState } from 'react';
import { Pagination, PaginationItem, ArrowBackIosOutlinedIcon, TextField } from '@mui/material';
//import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
//import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const PaginationComponent = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState('');

  const handleAlarm=()=>{
    alert("test")
  }
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
    onPageChange(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
    onPageChange(totalPages);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handlePageInputChange = (event) => {
    setInputPage(event.target.value);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      onPageChange(pageNumber);
      setInputPage('');
    } else {
      // Handle invalid page number input
      console.error('Invalid page number input');
    }
  };

  return (
    <div>
      {/*<Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            component={''}
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
        onPageChange={handlePageChange}
        onFirstPage={handleFirstPage}
        onLastPage={handleLastPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
      <TextField
        type="number"
        label="Go to Page"
        variant="outlined"
        value={inputPage}
        onChange={handlePageInputChange}
        InputProps={{ inputProps: { min: 1, max: totalPages } }}
        InputLabelProps={{ shrink: true }}
      />
      <button onClick={handleGoToPage}>Go</button>
*/}
      <div style={{"display":"flex"}}>
      <div style={{border:"1px solid gray",height:"38px"}}><FirstPageIcon fontSize="large"  onClick={handleAlarm}/></div>
      <div style={{border:"1px solid gray",height:"38px"}}><NavigateBeforeIcon fontSize="large" onClick={handleAlarm}/></div>

      <div style={{width:"82px",height:"38px"}}> <TextField
          id="outlined-number"
          label=""
          size='small'
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /></div>

      <div style={{border:"1px solid gray",height:"38px"}}><NavigateNextIcon fontSize="large" onClick={handleAlarm}/></div>
      <div style={{border:"1px solid gray",height:"38px"}}><LastPageIcon fontSize="large" onClick={handleAlarm}/></div>
      </div>
    </div>
  );
};

export default PaginationComponent;
