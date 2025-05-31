import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { useEffect } from "react";
import Pagination from "@/Components/Pagination";
import { TASK_STATUS_CLASS_MAP } from "@/constants";

export default function TasksTable({ tasks, queryParams = null, hideProjectColumn = false }) {
    queryParams = queryParams || {};
    console.log("Tasks", tasks.data.length);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // cleanup function to clear the timeout
        return () => clearTimeout(timer);

    }, []);

    const searchFieldChange = (name, value) => {

        if (value) {
            queryParams[name] = value;
            console.log("query value",queryParams);
        } else {
            delete queryParams[name];
        }

        router.get(route('task.index', queryParams));
    }

    const onKeyPress = (name, e) => {
        if (e.key !== 'Enter') return;

        searchFieldChange(name, e.target.value);
    }

    const clearFilter = () => {
        queryParams = null;
    }

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value={queryParams.name}
                        placeholder="Task Name Search"
                        onBlur={e => searchFieldChange('name', e.target.value)}
                        onKeyPress={e => onKeyPress('name', e)}
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
    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge ${TASK_STATUS_CLASS_MAP[rowData.status]}`}>{rowData.status}</span>;
    };

    return (
        <>
            <div>
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
                    emptyMessage="No Task found..."
                    header={header}
                    footer={footerTemplate(tasks.meta.links)}
                >
                    <Column field="id" header="Id" style={{ flexGrow: 1, flexBasis: '100px' }} alignFrozen="left"></Column>
                    <Column field="name" header="Task Name" style={{ minWidth: '12rem' }} ></Column>
                    <Column field="assignedUser.name" header="Assigned" style={{ minWidth: '12rem' }} ></Column>
                    <Column field="status" header="Status"  body={statusBodyTemplate} style={{ minWidth: '12rem' }}></Column>
                    <Column field="created_at" header="Created Date" style={{ minWidth: '12rem' }} ></Column>
                    <Column field="due_date" header="Due Date" style={{ minWidth: '12rem' }}></Column>

                    <Column field="createdBy.name" header="Created By" style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>
        </>
    )
}