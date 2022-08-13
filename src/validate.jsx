import React, { useState } from "react";
import { omit } from "lodash";

const Validation = (callback) => {
  const [values, setValues] = useState({});

  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    const chars = new RegExp("[^a-zA-Z0-9_-]");
    switch (name) {
      case "source":
        if (
          value.charAt(0) === "_" ||
          value.charAt(0) === "+" ||
          value.charAt(0) === "-"
        ) {
          setErrors({
            ...errors,
            source: "Cannot start with '-','+' and '_' ",
          });
        } else if (chars.test(value)) {
          setErrors({
            ...errors,
            source: "Special Characters are not allowed",
          });
        } else if (value.length <= 4) {
          setErrors({
            ...errors,
            source: "Must atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "source");
          setErrors(newObj);
        }
        break;

      case "pipeline":
        if (
          value.charAt(0) === "_" ||
          value.charAt(0) === "+" ||
          value.charAt(0) === "-"
        ) {
          setErrors({
            ...errors,
            pipeline: "Cannot start with '-','+' and '_' ",
          });
        } else if (chars.test(value)) {
          setErrors({
            ...errors,
            pipeline: "Special Characters are not allowed",
          });
        } else if (value.length <= 4) {
          setErrors({
            ...errors,
            pipeline: "Must atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "pipeline");
          setErrors(newObj);
        }
        break;

      case "projectName":
        if (
          value.charAt(0) === "_" ||
          value.charAt(0) === "+" ||
          value.charAt(0) === "-"
        ) {
          setErrors({
            ...errors,
            projectName: "Cannot start with '-','+' and '_' ",
          });
        } else if (chars.test(value)) {
          setErrors({
            ...errors,
            projectName: "Special Characters are not allowed",
          });
        } else if (value.length <= 4) {
          setErrors({
            ...errors,
            projectName: "Must atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "projectName");
          setErrors(newObj);
        }
        break;
      case "bucketName":
        if (
          value.charAt(0) === "_" ||
          value.charAt(0) === "+" ||
          value.charAt(0) === "-"
        ) {
          setErrors({
            ...errors,
            bucketName: "Cannot start with '-','+' and '_' ",
          });
        } else if (chars.test(value)) {
          setErrors({
            ...errors,
            bucketName: "Special Characters are not allowed",
          });
        } else if (value.length <= 4) {
          setErrors({
            ...errors,
            bucketName: "Must atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "bucketName");
          setErrors(newObj);
        }
        break;
      case "cloud":
        if (
          value.charAt(0) === "_" ||
          value.charAt(0) === "+" ||
          value.charAt(0) === "-"
        ) {
          setErrors({
            ...errors,
            cloud: "Cannot start with '-','+' and '_' ",
          });
        } else if (chars.test(value)) {
          setErrors({
            ...errors,
            cloud: "Special Characters are not allowed",
          });
        } else if (value.length <= 4) {
          setErrors({
            ...errors,
            cloud: "Must atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "cloud");
          setErrors(newObj);
        }
        break;
      case "credentials":
        if (
          value.charAt(0) === "_" ||
          value.charAt(0) === "+" ||
          value.charAt(0) === "-"
        ) {
          setErrors({
            ...errors,
            credentials: "Cannot start with '-','+' and '_' ",
          });
        } else if (chars.test(value)) {
          setErrors({
            ...errors,
            credentials: "Special Characters are not allowed",
          });
        } else if (value.length <= 4) {
          setErrors({
            ...errors,
            credentials: "Must atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "credentials");
          setErrors(newObj);
        }
        break;
      case "run":
        if (
          value.charAt(0) === "_" ||
          value.charAt(0) === "+" ||
          value.charAt(0) === "-"
        ) {
          setErrors({
            ...errors,
            run: "Cannot start with '-','+' and '_' ",
          });
        } else if (chars.test(value)) {
          setErrors({
            ...errors,
            run: "Special Characters are not allowed",
          });
        } else if (value.length <= 4) {
          setErrors({
            ...errors,
            run: "Must atleast have 5 letters",
          });
        } else {
          let newObj = omit(errors, "run");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default Validation;
