import Layout from "@/Layouts/layout/layout";
import { Head, Link, useForm } from "@inertiajs/react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import InputError from "../../Components/InputError";
import { Button } from "primereact/button";

export default function Create({ }) {

    const { data, setData, post, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        username: '',
        joined_date: '',
        phone_number: '',
        profile_image: '',
        company: '',
        occupation: '',
        department: '',
        description: '',
    });

    const status = [
        { name: 'pending', code: 'pending' },
        { name: 'in_progress', code: 'in_progress' },
        { name: 'completed', code: 'completed' },
    ];


    const onSubmit = (e) => {
        e.preventDefault();

        console.log("Entry Data: ", data);

        post(route("user.store"));
    };
    return (
        <Layout>
            <Head title="User Create" />
            <div className='block-viewer'>
                <div className='block-section'>
                    <div className='block-header'>
                        <div className="block-title">
                            <h4>Create New User</h4>
                        </div>
                    </div>
                    <div className='block-content p-6'>
                        <div className="grid">
                            <div className="col-12">
                                <form onSubmit={onSubmit}>
                                    <div className="p-fluid formgrid grid">
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="name">Name</label>
                                            <InputText
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                            />
                                            <InputError message={errors.name} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="profile">Profile Image</label>
                                            <InputText
                                                id="profile"
                                                type="file"
                                                name="profile_image"
                                                className="mt-1 block w-full"
                                                onChange={(e) => setData("profile_image", e.target.files[0])}
                                            />
                                            <InputError message={errors.profile_image} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-12">
                                            <label htmlFor="company">Company</label>
                                            <InputText
                                                id="company"
                                                type="text"
                                                name="company"
                                                value={data.company}
                                                onChange={(e) => setData('company', e.target.value)}
                                            />
                                            <InputError message={errors.company} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="department">Department</label>
                                            <InputText
                                                id="department"
                                                type="text"
                                                name="department"
                                                value={data.department}
                                                onChange={(e) => setData('department', e.target.value)}
                                            />
                                            <InputError message={errors.department} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="joined_date">Joining Date</label>
                                            <InputText
                                                id="joined_date"
                                                type="date"
                                                name="joined_date"
                                                value={data.joined_date}
                                                onChange={(e) => setData('joined_date', e.target.value)}
                                            />
                                            <InputError message={errors.joined_date} className="mt-2" />
                                        </div>

                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="user_name">User Name</label>
                                            <InputText
                                                id="username"
                                                type="text"
                                                name="username"
                                                value={data.username}
                                                onChange={(e) => setData('username', e.target.value)}
                                            />
                                            <InputError message={errors.name} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="user_email">User Email</label>
                                            <InputText
                                                id="user_email"
                                                type="text"
                                                name="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            <InputError message={errors.email} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label 
                                            htmlFor="user_password"
                                            >Password</label>
                                            <InputText
                                                id="user_password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                onChange={(e) => setData("password", e.target.value)}
                                            />
                                            <InputError message={errors.password} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label
                                                htmlFor="user_password_confirmation"
                                            >Confirm Password</label>
                                            <InputText
                                                id="user_password_confirmation"
                                                type="password"
                                                name="password_confirmation"
                                                value={data.password_confirmation}
                                                onChange={(e) =>
                                                    setData("password_confirmation", e.target.value)
                                                }
                                            />
                                            <InputError
                                                message={errors.password_confirmation}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="phone">Phone</label>
                                            <InputText
                                                id="phone"
                                                type="text"
                                                name="phone_number"
                                                value={data.phone_number}
                                                onChange={(e) => setData('phone_number', e.target.value)}
                                            />
                                            <InputError message={errors.phone_number} className="mt-2" />
                                        </div>
                                        <div className="field col-12 md:col-6">
                                            <label htmlFor="phone">Occupation</label>
                                            <InputText
                                                id="occupation"
                                                type="text"
                                                name="occupation"
                                                value={data.occupation}
                                                onChange={(e) => setData('occupation', e.target.value)}
                                            />
                                            <InputError message={errors.occupation} className="mt-2" />
                                        </div>
                                        <div className="field col-12">
                                            <label htmlFor="user_description">Description</label>
                                            <InputTextarea
                                                id="description"
                                                name="description"
                                                value={data.description}
                                                onChange={(e) => setData('description', e.target.value)}
                                                rows={4}
                                            />
                                            <InputError message={errors.description} className="mt-2" />
                                        </div>
                                        <div className="col-12 mt-4 text-right flex justify-content-end gap-3">
                                            <Link
                                                href={route("user.index")}
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
