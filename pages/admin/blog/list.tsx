import React, { useContext, useState } from "react";
import PrivateLayout from "../../../components/Layout/privateLayout";
import {
    Button,
    Grid,
    IconButton,
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Link from "next/link";
import { ChevronDown, Edit, Trash2 } from "react-feather";
import { LoaderContext } from "../../../context/LoaderContext";

interface BlogRowInterface {
    row: any;
    index: number;
    removeBlog: any;
}

const Row: React.FC<BlogRowInterface> = (props) => {
    const {row, index, removeBlog} = props;
    const [open, setOpen] = React.useState(false);

    return <React.Fragment>
        <TableRow
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell>
                <Link href={`edit/${row.slug}`}>
                    <span> {row.slug}</span>
                </Link>
            </TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell><div className="line-clamp-3">{row.description}</div></TableCell>
            <TableCell align="right" className="w-[150px]">
                <Link href={`edit/${row.slug}`}>
                    <IconButton aria-label="edit">
                        <Edit size={16}/>
                    </IconButton>
                </Link>
                <IconButton aria-label="edit" onClick={removeBlog}>
                    <Trash2 size={16} className="text-red-500"/>
                </IconButton>
                <IconButton aria-label="edit" onClick={() => setOpen(!open)}>
                    <ChevronDown size={16} className={`transition-all ${!open ? 'rotate-0' : 'rotate-[180deg]'}`}/>
                </IconButton>
            </TableCell>
        </TableRow>
    </React.Fragment>
}

const List: React.FC = () => {
    const [rows, setRows] = React.useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState<any>(10);
    const [pagination, setPagination]= useState({
        currentPage: '',
        totalPages: '',
        pageSize: '',
    })
    const {setIsLoading} = useContext(LoaderContext)

    const getBlogs = async (page:number) => {
        setIsLoading(true);
        const response = await fetch(`/api/Blog/GET/blogs?page=${page}`);
        const data = await response.json();
        setRows(data.data);
        setTotal(data.totalItems);
        setPagination({
            currentPage: data.page,
            totalPages: data.totalPages,
            pageSize: data.pageSize,
        });
        setIsLoading(false);
    };

    const handlePageChange = (event:any, newPage:any) => {
        setPagination({ ...pagination, currentPage: newPage });
        getBlogs(newPage);
    };

    const removeBlog = async ( page:number,id: string) => {
        setIsLoading(true);
        const response = await fetch(`/api/Blog/DELETE/blog?id=${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        if (data.message === 'Delete successful') {
            getBlogs(page);
        }
        setIsLoading(false);
    };


    React.useEffect(() => {
        getBlogs(page);
    }, [page]);

    return <PrivateLayout title="Alumel - Blog List">
        <Grid container alignItems="center" className="gap-[8px] mb-[12px]">
            <Typography variant="h5" component={Grid} item xs className="font-medium">
                Blogs
            </Typography>
            <Link href="/admin/blog/form">
                <Button variant="outlined" size="small" color="primary">Add</Button>
            </Link>
        </Grid>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="font-semibold">#</TableCell>
                        <TableCell className="font-semibold">Slug</TableCell>
                        <TableCell className="font-semibold">Title</TableCell>
                        <TableCell className="font-semibold">Description</TableCell>
                        <TableCell className="font-semibold" align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any, index: number) => <Row
                        key={index}
                        index={index}
                        row={row}
                        removeBlog={(id:string) => removeBlog(page,row._id)}
                    />)}
                </TableBody>
            </Table>
        </TableContainer>
        {
            rows.length > total && <div className="flex justify-end mt-[20px]">
                <Pagination
                    count={parseInt(pagination.totalPages)}
                    page={parseInt(pagination.currentPage)}
                    onChange={handlePageChange}
                />
            </div>
        }
    </PrivateLayout>
}

export default List;
