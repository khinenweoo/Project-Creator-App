import Layout from "@/Layouts/layout/layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import InputError from "../../Components/InputError";
import { Button } from "primereact/button";

export default function Create({ }) {

    const { data, setData, post, errors, reset } = useForm({
        name: '',
        image: '',
        status: '',
        description: '',
        due_date: ''
    });

    const status =  [
            { name: 'pending', code: 'pending' },
            { name: 'in_progress', code: 'in_progress' },
            { name: 'completed', code: 'completed' },
        ];

    const statusHandler = (value) => {
        setData("status", value);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        post(route("project.store"));
    };
    return (
        <Layout>
            <Head title="Project Create" />
            <div className='block-viewer'>
                <div className='block-section'>
                    <div className='block-header'>
                        <div className="block-title">
                            <h4>Create New Project</h4>
                        </div>
                    </div>
                    <div className='block-content p-6'>
                        <div className="grid">
                            <div className="col-12">
                                <form onSubmit={onSubmit}>
                                    <div className="p-fluid formgrid grid">
                                
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="lastname2">Project Image</label>
                                            <InputText
                                                id="project_image_path"
                                                type="file"
                                                name="image"
                                                className="mt-1 block w-full"
                                                onChange={(e) => setData("image", e.target.files[0])}
                                            />
                                            <InputError message={errors.image} className="mt-2"/>
                                        </div>
                                               <div className="field col-6 md:col-6">
                                            <label htmlFor="project_name">Project Name</label>
                                            <InputText 
                                                id="project_name" 
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
                                            value={data.status} 
                                            onChange={(e) => statusHandler(e.value)} 
                                            options={status} 
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
