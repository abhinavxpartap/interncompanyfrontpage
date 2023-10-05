import React, {useContext, useState} from "react";
import PrivateLayout from "../../../components/Layout/privateLayout";
import {
    Button,
    Collapse,
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
    TextField,
    Typography,
} from "@mui/material";
import Link from "next/link";
import {ChevronDown, Edit, Trash2} from "react-feather";
import {Img} from "../../../utils/Img";
import {LoaderContext} from "../../../context/LoaderContext";

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
            <TableCell>{row.description}</TableCell>
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
        <TableRow>
            <TableCell colSpan={6} className="py-0">
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid container alignItems="stretch" className="py-[16px] gap-[16px]">
                        <Grid item md={4} sm={6} xs={12}>
                            <Img
                                src={row.image}
                                alt={row.title}
                                className="w-full h-[300px] rounded object-cover border"
                            />
                        </Grid>
                        <Grid item xs>
                            <Grid
                                container
                                wrap="nowrap"
                                direction="column"
                                className="gap-[16px]"
                            >
                                <TextField
                                    fullWidth
                                    rows={5}
                                    multiline
                                    disabled
                                    size="small"
                                    label="Sort Description"
                                    variant="outlined"
                                    value={row.description}
                                />
                                <TextField
                                    fullWidth
                                    disabled
                                    size="small"
                                    label="Meta Title"
                                    variant="outlined"
                                    value={row.meta_title}
                                />
                                <TextField
                                    fullWidth
                                    disabled
                                    size="small"
                                    label="Meta Description"
                                    variant="outlined"
                                    value={row.meta_description}
                                />
                                <TextField
                                    fullWidth
                                    disabled
                                    size="small"
                                    label="Meta Keywords"
                                    variant="outlined"
                                    value={row.meta_keywords}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>
}

const List: React.FC = () => {
    const [rows, setRows] = React.useState([]);
    const [page, setPage] = useState(1);
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

    return <PrivateLayout title="Enjoy Mondays Pre Launch - Blog List">
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
        <div className="flex justify-end mt-[20px]">
        <Pagination
            count={parseInt(pagination.totalPages)} // Make sure to parse the string to a number
            page={parseInt(pagination.currentPage)}
            onChange={handlePageChange}
        />
        </div>
    </PrivateLayout>
}

export default List;