import React from 'react';
import "./user.css";

const user = () => {
  return <div>

 <div className="container my-5" >
            <div className="row mt-auto">
                <div className="col-lg-8 col-sm-12 text-center mx-auto">
                    <h1 className="display-4 mb-3">GitHub User Profile</h1>
                </div>
            </div>
            <div className="row">
                
                <div className="col-md-6 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" autoComplete='off' >
                         <div className="col-lg-8 col-sm-12 my-2 form-group">
                            <input className="form-control form-control-lg" placeholder="Github username"  id="w"  />
                        </div>
                        <div className="col-lg-3 col-sm-12 my-2 form-group">
                            <button className="btn btn-primary btn-block w-100 btn-lg">Search</button>
                        </div>
                        </form>
                        
                    </div>


               
                </div>
            </div>
        </div>
  </div>;
};

export default user;
