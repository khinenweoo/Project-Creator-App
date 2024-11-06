import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { useEffect } from "react";
import Pagination from "@/Components/Pagination";
import { data } from "autoprefixer";

export default function TasksTable({tasks, queryParams = null}) {
    queryParams = queryParams || {};

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        if (tasks.data.length !== 0) {
            setLoading(false);
        }

    }, []);

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }

        router.get(route('task.index', queryParams));
    }


    const clearFilter = () => {
        queryParams = null;
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span>
                    <i className="pi pi-search" />
                    <InputText 
                    value={queryParams.name} 
                    placeholder="Task Name Search" 
                    onChange={e => searchFieldChanged('name', e.target.value)}
                    />
                </span>
            </div>
        );
    }
    const header = renderHeader();

    const footerTemplate = (links) => {
        return (
            <Pagination links={links} />
        );

    }

    return (
        <>
            <div>

                <h3>Tasks Table</h3>
                <h5>Filter Menu</h5>
                    <DataTable
                        value={tasks.data}
                        paginator
                        className="p-datatable-gridlines"
                        showGridlines
                        rows={10}
                        dataKey="id"
                        filters={queryParams}
                        filterDisplay="menu"
                        loading={loading}
                        responsiveLayout="scroll"
                        emptyMessage="No Tasks found."
                        header={header}
                    >
                        <Column field="id" header="Id" style={{ flexGrow: 1, flexBasis: '100px' }} alignFrozen="left"></Column>
                        <Column field="name" header="Name" style={{ minWidth: '12rem' }} ></Column> 
                        <Column field="status" header="Status" style={{ minWidth: '12rem' }}></Column>
                        <Column field="created_at" header="Create Date" style={{ flexGrow: 1, flexBasis: '200px' }} ></Column>
                        <Column field="due_date" header="Due Date" style={{ minWidth: '12rem' }}></Column>

                        <Column field="createdBy.name" header="Created By" style={{ minWidth: '12rem' }}></Column>
                    </DataTable>
            </div>
        </>
    )
}