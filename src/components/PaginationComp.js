import React from 'react'
import ReactPaginate from 'react-paginate';

const PaginationComp = ({ getPage,totalpages}) => {
    const handlePageClick = (data) => {
        getPage(data.selected + 1)
    };
    return (
        <div>
            <ReactPaginate
                itemsPerPage={4}
                breakLabel=""
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={totalpages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                marginPagesDisplayed={1}
                className="pagination mx-3 my-3 d-flex align-items-center justify-content-center mx-auto orange-color fw-bold"
                pageClassName="page-item orange-color"
                pageLinkClassName="page-link orange-color"
                previousClassName="mx-3 orange-color"
                nextClassName="mx-3 orange-color"
                previousLinkClassName="text-decoration-none orange-color"
                nextLinkClassName="text-decoration-none orange-color"
            />
        </div>
    )
}

export default PaginationComp
