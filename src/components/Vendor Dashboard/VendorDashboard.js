import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./vendorDashboard.css";
import dashboard_icon from "../../images/dashboard_icon.png";
import services_icon from "../../images/services_icon.png";
import events_icon from "../../images/events_icon.png";
import analysis_icon from "../../images/analysis_icon.png";
import profile_icon from "../../images/profile_icon.png";
import create_service from "../../images/create_service.png";

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const loadComponents = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "services":
        return <div>Services</div>;
      case "events":
        return <div>Events</div>;
      case "analysis":
        return <div>Analyatics</div>;
      case "profile":
        return <div>profile</div>;
      default:
        return <Dashboard />;
    }
  }
  return (
    <div id="main-dashboard-div">
      <div>
        <div class="row">
          <div class="col-2 vertical-nav-col" >
            <DashboardNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div class="col-10 dashboard-content-col">
            {loadComponents()}
          </div>
        </div>
      </div>
    </div>
  )
}


function DashboardNav({ activeTab, setActiveTab }) {
  // const [activeTab, setActiveTab] = useState("dashboard");
  function handleNavLinkActive(navItem) {
    setActiveTab(navItem);
  }
  return (
    <div className='vertical-nav-container pt-2'>
      <ul class="nav flex-column">
        <li class="nav-item">
          <section className={`nav-link custom-nav-link  ${activeTab === "dashboard" ? "active" : ""}`} id="dashboard" onClick={() => { handleNavLinkActive("dashboard") }}>
            <img className='icon' src={dashboard_icon} />
            <span className='text'>dashboard</span>
          </section>
        </li>
        <li class="nav-item">
          <section className={`nav-link custom-nav-link  ${activeTab === "services" ? "active" : ""}`} id="services" onClick={() => { handleNavLinkActive("services") }}>
            <img className='icon' src={services_icon} />
            <span className='text'>Services</span>
          </section>
        </li>
        <li class="nav-item">
          <section className={`nav-link custom-nav-link  ${activeTab === "events" ? "active" : ""}`} id="events" onClick={() => { handleNavLinkActive("events") }}>
            <img className='icon' src={events_icon} />
            <span className='text'>Events</span>
          </section>
        </li>
        <li class="nav-item">
          <section className={`nav-link custom-nav-link  ${activeTab === "analysis" ? "active" : ""}`} id="analysis" onClick={() => { handleNavLinkActive("analysis") }}>
            <img className='icon' src={analysis_icon} />
            <span className='text'>Analyatics</span>
          </section>
        </li>
        <li class="nav-item">
          <section className={`nav-link custom-nav-link  ${activeTab === "profile" ? "active" : ""}`} id="profile" onClick={() => { handleNavLinkActive("profile") }}>
            <img className='icon' src={profile_icon} />
            <span className='text'>profile</span>
          </section>
        </li>
      </ul>
    </div>
  );
}



function Dashboard() {
  return (
    <div className='dashboard-component'>
      <div className='user-details'>
        <h1 id="title">Welcome back, Varun</h1>
        <h3 id="sub-title">your are logged in as <span>Shree Photographers</span></h3>
      </div>
      <div id='important-msg'>
        {/* <section class="placeholder-glow mb-1">
          <span class="placeholder  bg-light col-12"></span>
        </section>
        <section class="placeholder-glow  mb-1">
          <span class="placeholder  bg-light col-12"></span>
        </section>
        <section class="placeholder-glow mb-1">
          <span class="placeholder  bg-light col-12"></span>
        </section>
        
       <section class="placeholder-glow mb-1">
          <span class="placeholder  bg-light col-12"></span>
        </section> */}
        {/* <a class="btn btn- disabled placeholder col-4" aria-disabled="true"></a> */}
      </div>
      <div class="text-center">
        <div class="row">
          <div class="col-lg-4 col-mg-6 col-sm-6">
            <button className='content-button' to="/create-service">
              <Link id='link' to="/create-service">
                <section className='button-section'>
                  <section className='button-img-section'>
                    <img className='button-img' src={create_service} />
                  </section>
                  <section className='button-text'>
                    <h3>Create Services</h3>
                  </section>
                </section>
              </Link>
            </button>
          </div>
          <div class="col-lg-4 col-mg-6 col-sm-6">
          <button className='content-button' to="/create-service">
              <Link id='link' to="/create-service">
                <section className='button-section'>
                  <section className='button-img-section'>
                    <img className='button-img' src={create_service} />
                  </section>
                  <section className='button-text'>
                    <h3>Update Services</h3>
                  </section>
                </section>
              </Link>
            </button>
          </div>
          <div class="col-lg-4 col-mg-6 col-sm-6">
          <button className='content-button' to="/create-service">
              <Link id='link' to="/create-service">
                <section className='button-section'>
                  <section className='button-img-section'>
                    <img className='button-img' src={create_service} />
                  </section>
                  <section className='button-text'>
                    <h3>Create Services</h3>
                  </section>
                </section>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
