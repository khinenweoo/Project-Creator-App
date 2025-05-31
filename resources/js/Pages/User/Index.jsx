import { Head, Link, router } from "@inertiajs/react";
import Layout from "@/Layouts/layout/layout.jsx";
import TextInput from "@/Components/TextInput";
import { Button } from "primereact/button";
import Pagination from "@/Components/Pagination";

export default function Index({ auth, users, queryParams = null, success }) {


  const searchFieldChanged = (name, value) => {

    const queryParams = {};

    if (value === undefined || value === null) {
      console.warn('Received undefined serach value');
      return;
    } else {
      queryParams[name] = value

      router.get(route('user.index'), queryParams);
    }


  };

  const onKeyPress = (name, e) => {
    if (e.key !== 'Enter') return;

    searchFieldChanged(name, e.target.value);
  }

  const deleteUser = (user) => {
    if (!window.confirm('Are you sure you want to delete the user?')) {
      return;
    }
    router.delete(route('user.destroy', user.id));
  }

  return (
    <Layout user={auth.data}>
      <Head title="Members" />
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <div className="flex flex-row justify-content-between border-bottom-1 surface-border pb-4">
              <div>
                <div className="font-medium text-3xl text-900">Members</div>
              </div>
              <div className="flex md:justify-content-end align-items-center lg:mt-0">
                <Link href={route('user.create')} >
                  <Button label="Add Member" type="button" className="p-button-outlined mr-2" icon="pi pi-plus-circle" />
                </Link>
              </div>
            </div>

            {success && (<div className="bg-teal-500 py-2 px-4 text-white border-teal-600 border-round mb-4">
              {success}
            </div>)}
            <div className="p-dataview p-component p-dataview-grid" data-pc-name="dataview" data-pc-section="root">
              <div className="p-dataview-header bg-white border-none p-0" data-pc-section="header">
                <div className="mt-5 mb-3 w-full">
                  <div className="flex flex-row justify-content-start flex-wrap gap-2 mb-2">
                    <div className="text-search">
                      <span className="p-input-icon-left"><i className="pi pi-search"></i>
                        <TextInput
                          className="p-inputtext p-component"
                          placeholder="Search by Name"
                          onBlur={e => searchFieldChanged('name', e.target.value)}
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </span>
                    </div>
                    <div className="dropdown-wrapper">

                      <TextInput
                        className="p-inputtext p-component"
                        placeholder="Search by Email"
                        onBlur={e => searchFieldChanged('email', e.target.value)}
                        onKeyPress={(e) => onKeyPress("email", e)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* user data content */}
              <div className="p-dataview-content">
                <div className="p-grid grid p-nogutter grid-nogutter">
                  {
                    users.data.map((user) => (
                      <div className="col-12 lg:col-6" key={user.id}>
                        <div className="card m-2" >
                          <div className="card-body flex">
                            <div className="profile text-center pr-4">
                              <div className="img-thumbnail mb-3 rounded-md shadow-md">
                                <img
                                  src={user.profile_image}
                                  alt=""
                                  className="avatar w-full h-16"
                                />
                              </div>

                              <div className="grid grid-cols-1 col-span-full w-full justify-content-center">

                                <span className="block text-sm text-gray-500 text-center mt-2">Member Id: {user.member_id}</span>

                              </div>
                            </div>
                            <div className="info pl-4 border-l-gray-400 w-full">
                              <h6 className="font-bold text-xl mt-2 mb-0">{user.name}</h6>
                              <h6 className="font-bold text-indigo-400 mt-2">{user.occupation}</h6>
                              <span className="font-bold text-sm text-gray-500">{user.department}</span>

                              <div className="row gap-2 pt-2">
                                <div className="pb-2">
                                  <div className="flex flex-row justify-center items-center">
                                    <i className="pi pi-phone" />
                                    <span className="text-sm ml-2">{user.phone_number}</span>
                                  </div>
                                </div>
                                <div className="pb-2">
                                  <div className="flex flex-row justify-center items-center">
                                    <i className="pi pi-envelope" />
                                    <span className="text-sm ml-2">{user.email}</span>
                                  </div>
                                </div>
                              </div>
                              {auth.data.is_admin === 1 && (<div className="btn-group mt-2">
                                <Link href={route('user.edit', { user: user.id })}>
                                  <button type="button" className="p-button p-component p-button-icon-only p-button-outlined p-button-success mr-2">
                                    <i className="pi pi-file-edit" />
                                  </button>
                                </Link>
                                <button
                                  type="button"
                                  onClick={e => deleteUser(user)}
                                  className="p-button p-component p-button-icon-only p-button-outlined p-button-danger"
                                >
                                  <i className="pi pi-trash" />
                                </button>
                              </div>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <Pagination links={users.meta.links} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
