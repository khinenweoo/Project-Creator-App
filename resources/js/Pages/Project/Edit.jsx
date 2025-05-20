import Layout from "@/Layouts/layout/layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import InputError from "../../Components/InputError";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { useState } from "react";

export default function Edit({ auth, project }) {

    const projectData = project?.data || project || {};
    const projectId = project?.data.id || project.id;

    const statusOptions =  [
        { name: 'pending', code: 'pending' },
        { name: 'in_progress', code: 'in_progress' },
        { name: 'completed', code: 'completed' },
    ];

    const initialStatusOption = statusOptions.find(s => s.code === projectData.status) || null;


    const { data, setData, post, errors } = useForm({
        image: null,
        image_path: projectData.image_path || null,
        name: projectData.name || "",
        status: initialStatusOption,
        description: projectData.description || "",
        due_date: projectData.due_date1 || "",
        _method: "PUT",
    });

    const statusHandler = (value) => {
        const updateStatusOption = statusOptions.find(s => s.code === value.code);
        setData("status", updateStatusOption);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // Prepare the payload for submission
        console.log("Form Data:", data); 
        const submitData = {
            ...data,
            update_status: data.status ? data.status.code : "", // Extract the code for submission
        };
        console.log("Submit Data:", submitData); // Debugging line to check the payload
        post(route("project.update", projectId), {
            project: submitData,
        });
    };

    return (
        <Layout>
            <Head title="Project Edit" />
            <div className='block-viewer max-w-6xl mx-auto'>
                <div className='block-section'>
                    <div className='block-header'>
                        <div className="block-title">
                            <h4>Edit Project {data.name}</h4>
                        </div>
                    </div>
                    <div className='block-content p-6'>
                        <div className="grid">
                            <div className="col-12">
                                <form onSubmit={onSubmit}>
                                    <div className="p-fluid formgrid grid">
                                        <div className="field col-12 md:col-12">
                                            {data.image_path && (
                                                <div className="mb-4">
                                                    <img src={data.image_path} alt="Project" className="w-full h-full md:h-20rem"/>
                                                </div>
                                            )}
                                            <label htmlFor="project_image_path">Project Image</label>
                                            <InputText
                                                id="project_image_path"
                                                type="file"
                                                name="image"
                                                className="mt-1 block w-full"
                                                onChange={(e) => setData("image", e.target.files[0])}
                                            />
                                            <InputError message={errors.image} className="mt-2"/>
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="project_name">Project Name</label>
                                            <InputText 
                                                id="project_name" 
                                                type="text" 
                                                name="name" 
                                                value={data.name}
                                                onChange={(e) => setData("name", e.target.value)}
                                            />
                                            <InputError message={errors.name} className="mt-2"/>
                                        </div>
                                        <div className="field col-12 md:col-3">
                                            <label htmlFor="status">Status</label>
                                            <Dropdown 
                                                id="status" 
                                                name="status"
                                                value={data.status} 
                                                onChange={(e) => statusHandler(e.value)}
                                                options={statusOptions} 
                                                optionLabel="name" 
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
                                        <div className="field col-12">
                                            <label htmlFor="project_description">Project Description</label>
                                            <InputTextarea 
                                                id="project_description" 
                                                name="description" 
                                                value={data.description}
                                                onChange={(e) => setData("description", e.target.value)}
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
