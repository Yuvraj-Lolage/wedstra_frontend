import React, { useState, useCallback, useEffect } from 'react';
import "./personal_info.css";
import { useDropzone } from "react-dropzone";
function PersonalInformation({ updateFormData }) {
    const [personalFormData, setPersonalFormData] = useState({
        username: "",
        password: "",
        vendor_name: "",
        email: "",
        phone_no: "",
        city: ""
    });
    
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        let error = "";
        switch (name) {
            case "username":
                if (!value) error = "Username is required";
                break;
            case "password":
                if (!value) error = "Password is required";
                else if (value.length < 6) error = "Password must be at least 6 characters";
                break;
            case "vendor_name":
                if (!value) error = "Vendor name is required";
                break;
            case "email":
                if (!value) error = "Email is required";
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
                break;
            case "phone_no":
                if (!value) error = "Phone number is required";
                else if (!/^\d{10}$/.test(value)) error = "Phone number must be 10 digits";
                break;
            case "city":
                if (!value) error = "City is required";
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validate(name, value)
        }));
    };

    useEffect(() => {
        updateFormData(personalFormData);
    }, [personalFormData, updateFormData]);

    return (
        <div className='personal-info-form'>
            <section className='title'>
                <h1>Personal Information</h1>
            </section>
            <div className='form-section'>
                {Object.entries(personalFormData).map(([key, value]) => (
                    <div className="mb-3" key={key}>
                        <input
                            type={key === "password" ? "password" : "text"}
                            className={`form-control form-control-lg ${errors[key] ? "is-invalid" : ""}`}
                            name={key}
                            placeholder={key.replace("_", " ").charAt(0).toUpperCase() + key.replace("_", " ").slice(1)}
                            value={value}
                            onChange={handleChange}
                        />
                        {errors[key] && <div className="invalid-feedback">{errors[key]}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

function BusinessInformation({ updateFormData }) {
    const [businessFormData, setBusinessFormData] = useState({
        business_name: '',
        business_category: '',
        gst_number: '',
        terms_and_conditions: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        updateFormData(businessFormData);
    }, [businessFormData, updateFormData]);

    const validate = (name, value) => {
        let error = "";
        switch (name) {
            case "business_name":
                if (!value.trim()) error = "Business name is required";
                break;
            case "business_category":
                if (!value.trim()) error = "Business category is required";
                break;
                // case "gst_number":
                //     const gstValue = value.toUpperCase();
                //     if (!gstValue.trim()) error = "GST number is required";
                //     else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/.test(gstValue)) {
                //         error = "Invalid GST number format";
                //     }
                //     break;
            case "terms_and_conditions":
                if (!value.trim()) error = "Terms and conditions are required";
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBusinessFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validate(name, value)
        }));
    };

    return (
        <div className='business-info-form'>
            <section className='title'>
                <h1>Business Information</h1>
            </section>

            <div className='form-section'>
                <div className="mb-3">
                    <input type="text" className={`form-control form-control-lg ${errors.business_name ? "is-invalid" : ""}`} name="business_name" placeholder="Business Name" value={businessFormData.business_name} required onChange={handleChange} />
                    {errors.business_name && <div className="invalid-feedback">{errors.business_name}</div>}
                </div>
                <div className="mb-3">
                    <input type="text" className={`form-control form-control-lg ${errors.business_category ? "is-invalid" : ""}`} name="business_category" placeholder="Business Category" value={businessFormData.business_category} required onChange={handleChange} />
                    {errors.business_category && <div className="invalid-feedback">{errors.business_category}</div>}
                </div>
                <div className="mb-3">
                    <input type="text" className={`form-control form-control-lg ${errors.gst_number ? "is-invalid" : ""}`} name="gst_number" placeholder="GST No" value={businessFormData.gst_number} required onChange={handleChange} />
                    {errors.gst_number && <div className="invalid-feedback">{errors.gst_number}</div>}
                </div>
                <div className="mb-3">
                    <input type="text" className={`form-control form-control-lg ${errors.terms_and_conditions ? "is-invalid" : ""}`} name="terms_and_conditions" placeholder="Terms & Conditions" value={businessFormData.terms_and_conditions} required onChange={handleChange} />
                    {errors.terms_and_conditions && <div className="invalid-feedback">{errors.terms_and_conditions}</div>}
                </div>
            </div>
        </div>
    );
}


function DocumentUpload({ updateFormData }) {
    // const [aadharCard, setAadharCard] = useState(null);
    // const [panCard, setPanCard] = useState(null);
    // const [businessPan, setBusinessPan] = useState(null);
    // const [electricityBill, setElectricityBill] = useState(null);
    // const [businessPhotos, setBusinessPhotos] = useState(null);

    const [uploadedDocuments, setUploadedDocuments] = useState({
        vendor_aadharCard: null,
        vendor_PAN: null,
        business_PAN: null,
        electricity_bill: null,
        business_photos: null,
        liscence:null
    });
    

    const handleFileDrop = (fieldName, isMultiple = false) => (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const files = isMultiple ? acceptedFiles : acceptedFiles[0];
    
            setUploadedDocuments((prevState) => ({
                ...prevState,
                [fieldName]: files,
            }));
    
            updateFormData({
                [fieldName]: files,
            });
        }
    };
    
    

    const handleFileRemove = (fieldName) => {
        setUploadedDocuments((prevState) => ({
            ...prevState,
            [fieldName]: null,
        }));
        updateFormData({
            [fieldName]: null,
        });
    };

    const handleMultipleFileRemove = (fieldName, index) => {
        setUploadedDocuments((prevState) => {
            const updatedFiles = prevState[fieldName].filter((_, i) => i !== index);
            return {
                ...prevState,
                [fieldName]: updatedFiles,
            };
        });
        updateFormData({
            [fieldName]: uploadedDocuments[fieldName].filter((_, i) => i !== index),
        });
    };
    

    return (
        <div className="personal-info-form">
            <section className="title">
                <h1>Upload Documents</h1>
            </section>
            <section className='file-container'>

                {/* Aadhar Card Upload */}
                <FileUpload
                    label="Aadhar Card"
                    file={uploadedDocuments["vendor_aadharCard"]}
                    onDrop={handleFileDrop("vendor_aadharCard", false)}
                    onRemove={()=> handleFileRemove("vendor_aadharCard") }
                    isLastFileUpload={ false }
                    
                />

                {/* PAN Card Upload */}
                <FileUpload
                    label="PAN Card"
                    file={uploadedDocuments["vendor_PAN"]}
                    onDrop={handleFileDrop("vendor_PAN", false)}
                    onRemove={()=> handleFileRemove("vendor_PAN") }
                    isLastFileUpload={ false }
                />

                {/* Business PAN Upload */}
                <FileUpload
                    label="Business PAN"
                    file={uploadedDocuments["business_PAN"]}
                    onDrop={handleFileDrop("business_PAN", false)}
                    onRemove={()=> handleFileRemove("business_PAN") }
                    isLastFileUpload={ false }
                />

                {/* Electricity Bill Upload */}
                <FileUpload
                    label="Electricity Bill"
                    file={uploadedDocuments["electricity_bill"]}
                    onDrop={handleFileDrop("electricity_bill", false)}
                    onRemove={()=> handleFileRemove("electricity_bill") }
                    isLastFileUpload={ false }
                />

                {/* liscence */}
                <FileUpload
                    label="liscence"
                    file={uploadedDocuments["liscence"]}
                    onDrop={handleFileDrop("liscence", false)}
                    onRemove={()=> handleFileRemove("liscence") }
                    isLastFileUpload={ false }
                />

                {/* Business Photos Upload */}
                <FileUpload
                    label="Business Photos"
                    file={ uploadedDocuments["business_photos"] }
                    onDrop={handleFileDrop("business_photos", true)}
                    onRemove={(index) => handleMultipleFileRemove("business_photos", index)}
                    isLastFileUpload={ true }
                />
            </section>
        </div>
    );
};

const FileUpload = ({ label, file, onDrop, onRemove, isLastFileUpload}) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*,application/pdf",
        multiple: isLastFileUpload, // Dynamically set based on the component
    });
    

    return (
        <div className="file-upload">
            <label className="file-label">{label}</label>
            <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <span className="title">Choose a file or drag & drop it here</span>
                <br />
                <span className="sub-title">JPEG, PNG, and PDF formats, up to 50MB</span>
            </div>

            {/* Handle single or multiple files */}
            {file && (
                <div className="file-info">
                    <strong>Selected {isLastFileUpload ? "Files" : "File"}:</strong>
                    {isLastFileUpload ? (
                        file.map((f, index) => (
                            <div key={index} className="file-item px-3">
                                {f.name}
                                <button className="remove-btn" onClick={() => onRemove(index)}>
                                    <h6>X</h6>
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="file-item">
                            {file.name}
                            <button className="remove-btn" onClick={onRemove}>
                                <h6>X</h6>
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};


export { PersonalInformation, BusinessInformation, DocumentUpload };


