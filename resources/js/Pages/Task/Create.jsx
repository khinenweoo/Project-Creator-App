import Layout from "@/Layouts/layout/layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import InputError from "../../Components/InputError";
import { useMemo, useState } from "react";
import { Button } from "primereact/button";

export default function Create({ projects, users }) {

    const { data, setData, post, errors, reset } = useForm({
        name: "",
        image: "",
        status: "",
        priority: "",
        due_date: "",
        description: "",
        project_id: "",
        assigned_user_id: "",
    });


    const projectOptions = projects.data.map(project => ({
        id: project.id,
        name: project.name,
    }));
    
    const statusOptions =  [
        { name: 'pending', code: 'pending' },
        { name: 'in_progress', code: 'in_progress' },
        { name: 'completed', code: 'completed' },
    ];
    const PriorityOptions =  [
        { name: 'Highest', code: 'highest' },
        { name: 'Medium', code: 'medium' },
        { name: 'Low', code: 'low' },
        { name: 'Lowest', code: 'lowest' },
    ];

    const assignUserOptions = users.data.map(user => ({
        id: user.id,
        name: user.name,
    }));


    const setProject = (value) => {
        setData("project_id", value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Entry data: ', data);

        post(route("task.store"));
    };


    return (
        <Layout>
            <Head title="Project Create" />
            <div className='block-viewer'>
                <div className='block-section'>
                    <div className='block-header'>
                        <div className="block-title">
                            <h4>Create New Task</h4>
                        </div>
                    </div>
                    <div className='block-content p-6'>
                        <div className="grid">
                            <div className="col-12">
                                <form onSubmit={onSubmit}>
                                    <div className="p-fluid formgrid grid">
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="status">Project</label>
                                            <Dropdown 
                                                id="project" 
                                                name="project_id"
                                                optionLabel="name"
                                                optionValue="id"
                                                value={data.project_id} 
                                                options={projectOptions} 
                                                onChange={(e) => setProject(e.value)} 
                                                placeholder="Select Project"
                                            />
                                              <InputError message={errors.project_id} className="mt-2"/>
                                        </div>
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="task_image_path">Image</label>
                                            <InputText
                                                id="task_image_path"
                                                type="file"
                                                name="image"
                                                className="mt-1 block w-full"
                                                onChange={(e) => setData("image", e.target.files[0])}
                                            />
                                            <InputError message={errors.image} className="mt-2"/>
                                        </div>
                                        <div className="field col-6 md:col-6">
                                            <label htmlFor="task_name">Task Name</label>
                                            <InputText 
                                                id="task_name" 
                                                type="text" 
                                                name="name" 
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                            <InputError message={errors.name} className="mt-2"/>
                                        </div>
                              
                                        <div className="field col-12 md:col-3">
                                            <label htmlFor="status">Status</label>
                                            <Dropdown 
                                                id="status" 
                                                name="status"
                                                optionLabel="name" 
                                                optionValue="code"
                                                value={data.status} 
                                                options={statusOptions} 
                                                onChange={(e) => setData('status', e.value)} 
                                                placeholder="Select Status"
                                            />
                                            <InputError message={errors.status} className="mt-2"/>
                                        </div>
                                        <div className="field col-12 md:col-3">
                                            <label htmlFor="due_date">Due Date</label>
                                            <InputText 
                                                id="due_date" 
                                                type="date"
                                                name="due_date"
                                                value={data.due_date}
                                                onChange={(e) => setData("due_date", e.target.value)} 
                                            />
                                            <InputError message={errors.due_date} className="mt-2"/>

                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="priority">Priority</label>
                                            <Dropdown 
                                            id="priority" 
                                            name="priority"
                                            optionLabel="name" 
                                            optionValue="code"
                                            value={data.priority} 
                                            onChange={(e) => setData('priority', e.value)} 
                                            options={PriorityOptions} 
                                            placeholder="Select Priority"
                                            />
                                            <InputError message={errors.priority} className="mt-2"/>
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="priority">Task Assign User</label>
                                            <Dropdown 
                                                id="assign_user" 
                                                name="assigned_user_id"
                                                optionLabel="name" 
                                                optionValue="id"
                                                value={data.assigned_user_id} 
                                                options={assignUserOptions} 
                                                onChange={(e) => setData('assigned_user_id', e.value)} 
                                                placeholder="Select Task Assign Person"
                                            />
                                            <InputError message={errors.assigned_user_id} className="mt-2"/>
                                        </div>
                                        <div className="field col-12">
                                            <label htmlFor="task_description">Description</label>
                                            <InputTextarea 
                                            id="task_description" 
                                            name="description" 
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            rows={4} 
                                            />
                                             <InputError message={errors.description} className="mt-2"/>
                                        </div>


                                        <div className="col-12 mt-4 text-right flex justify-content-end gap-3">
                                            <Link 
                                                href={route("projects.index")}
                                                className=""
                                            >
                                                <Button label="Cancel" type="button" className="p-button-outlined mr-2" />
                                            </Link>
                                            <Button label="Submit" type="submit" severity="info" className="w-auto" icon="pi pi-check" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}
