import { useMediaQuery, TextField, Box } from "@mui/material";
import { getIn } from "formik";

const AddressForm = (
  type,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const formattedName = (field) => `${type}.${field}`;

  //Check for error
  //Check if formattedName field is touched(filled) and 
  //has errors - both conditions need to be true to display errors
  //Formik's getIn function grabs the needed fields
  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
      getIn(errors, formattedError(field))
    );

  //Showing the text error
  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) &&
    getIn(errors, formattedError(field));


  return (
    //Display errors in a grid
    //sx to target child divs in grid if its on Mobile screen span 4
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx = {{
        "& > div" : { gridColumn: isNonMobile ? undefined : "span 4" }
      }}
    >
      {/* FIRST NAME */}
      <TextField 
        fullWidth
        type="text"
        label="First Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.firstName}
        name={formattedName("firstName")}
        error={formattedError("firstName")}
        helperText={formattedHelper("firstName")}
        sx={{ gridColumn: "span 2" }}
      />

      {/* LAST NAME */}
      <TextField 
        fullWidth
        type="text"
        label="Last Name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.lastName}
        name={formattedName("lastName")}
        error={formattedError("lastName")}
        helperText={formattedHelper("lastName")}
        sx={{ gridColumn: "span 2" }}
      />

      {/* COUNTRY */}
      <TextField 
        fullWidth
        type="text"
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        sx={{ gridColumn: "span 4" }}
      />

      {/* STREET ADDRESS 1 */}
      <TextField 
        fullWidth
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
        sx={{ gridColumn: "span 2" }}
      />

      {/* STREET ADDRESS 2 */}
      <TextField 
        fullWidth
        type="text"
        label="Street Address (Optional)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street2}
        name={formattedName("street2")}
        error={formattedError("street2")}
        helperText={formattedHelper("street2")}
        sx={{ gridColumn: "span 2" }}
      />

      {/* CITY */}
      <TextField 
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        sx={{ gridColumn: "span 2" }}
      />

      {/* STATE */}
      <TextField 
        fullWidth
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName("state")}
        error={formattedError("state")}
        helperText={formattedHelper("state")}
        sx={{ gridColumn: "1fr" }}
      />

      {/* ZIP CODE */}
      <TextField 
        fullWidth
        type="text"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
        sx={{ gridColumn: "1fr" }}
      />
    </Box>
  )
}

export default AddressForm;