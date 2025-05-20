import { Head, Link, router } from "@inertiajs/react";
import Layout from "@/Layouts/layout/layout.jsx";
import TextInput from "@/Components/TextInput";

export default function Index({ members, queryParams = null, success }) {

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value
    } else {
      delete queryParams[name]
    }

    router.get(route('member.index'), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== 'Enter') return;

    searchFieldChanged(name, e.target.value);
  }

  const deleteMember = (member) => {
      if (!window.confirm('Are you sure you want to delete the member?')) {
          return;
      }
      router.delete(route('member.destroy', member.id));
  }

  return (
    <Layout>
      <Head title="Members" />
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <div className="flex flex-row justify-content-between border-bottom-1 surface-border pb-4">
              <div>
                <div className="font-medium text-3xl text-900">Members</div>
              </div>
              <div className="flex md:justify-content-end align-items-center lg:mt-0">
                <Link href={route('member.create')} >
                  <Button label="Create Project" type="button" className="p-button-outlined mr-2" icon="pi pi-plus-circle" />
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
              {/* member data content */}
              <div className="p-dataview-content" data-pc-section="content">
                <div className="p-grid grid p-nogutter grid-nogutter" data-pc-section="grid">
                  {members.data.map((member) => (
                    <div className="col-12 lg:col-4" key={member.id}>
                      <div className="card m-1 px-3 border-1 surface-border">
                        <div className="flex flex-wrap gap-2 align-items-center justify-content-between mb-2">
                          <div className="lesson_name w-7 h-6">
                            <h6 className="fw-bold hover:underline text-nowrap">

                              <Link href={route('member.show', { member: member.id })} className="text-gray-800" >
                                {member.name}
                              </Link>
                            </h6>
                          </div>
                          <div className="btn-group flex justify-end w-4" >
                            <Link href={route('member.edit', { member: member.id })}>
                              <button type="button" className="p-button p-component p-button-icon-only p-button-outlined p-button-success mr-2">
                                <i className="pi pi-file-edit" />
                              </button>
                            </Link>


                            <button
                              type="button"
                              onClick={e => deleteMember(member)}
                              className="p-button p-component p-button-icon-only p-button-outlined p-button-danger"
                            >
                              <i className="pi pi-trash" />
                            </button>

                          </div>
                        </div>

                        <div className="grid pt-4">
                          <div className="col-6">
                            <div className="flex align-items-center justify-between">
                              <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                <i className="pi pi-email text-xl"></i>
                              </div>
                              <span>member@email.com</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="flex align-items-center justify-between">
                              <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                <i className="pi pi-phone text-xl"></i>
                              </div>
                              <span>202-555-0174</span>
                            </div>
                          </div>
                        </div>
                        <div className="grid mt-2">
                          <div className="col-6">
                            <div className="flex align-items-center justify-between">
                              <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                <i className="pi pi-list text-xl"></i>
                              </div>
                              <span>2734 West Fork Street,EASTON 02334.</span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="flex align-items-center justify-between">
                              <div className="flex align-items-center justify-content-center border-round w-4 h-2">
                                <i className="pi pi-flag-fill text-xl"></i>
                              </div>
                              <span>19/03/1980</span>
                            </div>
                          </div>
                        </div>
                        <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto"></hr>
                        <div className="flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-bold mb-0">Progress</h6>
                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination links={members.meta.links} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}
