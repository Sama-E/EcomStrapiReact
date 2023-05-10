import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      <Box>
        {/* BILLING FORM */}
        <Typography sx={{ mb: "15px" }} fontSize = "18px">
          Billing Information
        </Typography>
        <AddressForm 
          type="billingAddress"
          values={values.billingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      {/* Checkbox */}
      <Box mb="20px">
        <FormControlLabel
          label="Same for Shipping Address"
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
              )}
            />
          }
        />
      </Box>

      {/* SHIPPING FORM */}
      {!values.shippingAddress.isSameAddress && (
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize = "18px">
          Shipping Information
        </Typography>
        <AddressForm 
          type="shippingAddress"
          values={values.shippingAddress}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
      )}
    </Box>
  );
};

export default Shipping;