# Issues

## Overall Issues

- Function Descriptions are incomplete
- Toolstips and help texts are incomplete
- Enums are represented as Strings in Documentation

# Account Creation

## Select Customer

❌ Customer Search by Account Number was not present
🤞 Introduced 4 more fields for searching - cusReferenceCode, cusContactMobileNumber, cusBusinessRegNo
❌ Search by the 4 fields introduced fails
⚠️ Once Search issues are sorted, Need to sort the Pagination Calls

### Ui Issues

- Empty Data needs to be handled
- spacing issues in the modal
- Throttle the search

## Step 1

### Step 1 - Customer Details

❌ Customer Account Photo is missing
⚠️ Not All Fields can be filled by the UI

<!-- casaAccountRole: ""
casaApplicantStatus: ""
casaBeneficialOwnership: ""
casaCustomerCode: "SIN01"
casaCustomerId: 159
casaCustomerName: "Ruwanga Priyasad"
casaFullLegalName: ""
casaKycStatus: "ACTIVE"
casaOwnershipType: "JOINT"
signatureId: ""
taxPercerntage: 5 -->

#### Ui Issues

- casaOwnershipType & taxPercerntage needs to be in the array

### Step 1 - Guardian Details

❌ There is no fields in the `AccountResource` interface to send the Guardian Details
❌ Adding Guardian Flow is disconnected (Add a customer and then add him as guardian detail to the user)

### Step 1 - Disable Notes

✅ No issues

### Step 1 - Nominee Details

❌ Nominee Details UI and the `NomineeDetailsResource` does not overlap. There is no way to map
❌ Adding Nominee Flow is disconnected - How does it work?

## Step 2

### Step 2 - Product Details

❌ Sub Product does not have icon and description fields
❌ Sub Product - should be able to filter by product group;
⚠️ Clarification: Need to clarfiy the 4 terms heres - Product Type, Account Type, Main Category, Product Category, Sub Category

## Step 3

### Step 3 - Basic Account Details

❌ Account ID Generation LOGIC
❌ Secondary Account Number - Nowhere to be found. Instructed to keep it as null which does not make sense
⚠️ two simar fields - casaAnticipatedValue & casaAnticipatedValueId
⚠️ 3 similar fields - casaCurrency, casaCurrencyCode & casaCurrencyNumeric

### Step 3 - Account Control

✅ No issues

### Step 3 - Account Purpose

❌ Account Remarks is a text string in the UI where in the Specs it's an array of object => `casaAccountRemarks?: Array<AccountRemarksResource>`

### Step 3 - Source of Funds

...

❌ Credit Interest Data are not sent

❌ Most of the data in Card Information list are not sent to the backend

❌Charges -> Geeneration of fields is not clear

# API issues

1. http://132.145.228.83/casa-product-bca/product/AnRkr/accounttype/CURRENT_ACCOUNT returns : 204 No Content. Ideally it should return empty []

2.

# 09/07/2020

# step 1

# Customer Details

1. Customer photo api not given. (issue)
   //common customer -> perAttrubute1.

2. Need to Understand how nominee works. (concern)

// common customer -> getNominees(customerId: number, culpId: number)
// get the nominnes and add to the table.
// need a custom search bar for the nominees.

// guardian details -> getGuardians(cusId)
// same as nominee.

// get the server date.

# step 2

# Product Details

1. In Account Type Current account gives an empty result. (issue) --pending
2. Need to get the right api to get sub products , after selecting the main product. (issue) --pending
   // sub product mapping is wrong need to talk with ishanka.
3. Need to clarify how to get Credit Interest Rate Details Table in the information section. (concern)
4. Icons for the products not given. (issue) --done
5. Sub products description is not in the sub products results.(issue)
6. There is two products in the main category the name is empty.(issue)
7. how the information section works.

// information section product details getting from sub product interface.

// sub product --pending

# step 3

# Account Details

1. Need to clarify about the account name. (concern) --done
2. Need to clarify about account currency api. (concern) --done
3. Have to get account currency target key. (concern) --done
4. Need to get Account description target Key.(concern) --done
5. Need to ask from lolc about source of funds other textarea. (concern) --done

6. Need to ask from ishanka about the schema name api. (--new) --done

# step 4

1. Need to ask from ishanka about the frequency and delivery method api name. (--new) --done

# step 5

# Interest Details -- CREDIT INTEREST POSTING DETAILS UI SHOULD BE CHANGED.

1. Need to ask about Enable Interest Rate target key from lolc. (concern) --done
2. Need to ask about the Special Rate target key from lolc. (concern) --done

4) In selecting branches there is no field to get branch name.(--new) --done
5) In payment mode the the paymentModeId is not there. --done

// how credit interest posting details works.

// posting method === INTERNAL && posting type === SELF
// all the other parts are disabled go to next step

// posting method === INTERNAL && posting type === OTHER
// add Customer to the INTERNAL party . EXTERNAL disabled.

// posting method === EXTERNAL
// posting type is disabled.
// add customer to EXTERNAL party.

// debit interest posting details

// if(self)
// table disabled.

# step 6

# Overdraft Details

1. Need to ask from lolc where the Recovery Account Details are saved. (concern) --done

# step 8

# Card Information

1. Forgot to ask from lolc about following fields :- Foreign Transaction, Pos,atm, card issued by, transaction blocking, remarks (concern) --done
2. need to ask about collection point api from ishanka .( ---new) --done

# step 9

# Other

1. Document upload post method not given. (issue) --done
2. Document name need to get. --done
3. Need to clarify about operation instructions. (concern)

# step 10

# charges

1. In charge type name api 3 parameters needed given 1. (--new)

### 13/07/2020

# step 1

1. Where to save guardian details. --done

# step 2

1. product details. --pending

# step 3

1. Scheme type api. --pull sdk.
2. source of funds api. --done

# Step 6

1. Recovery account table names not correct. Account Number, Customer Name, propotion. -- pending api

# step 7

1. Notification Methods , contact name --pending
   contact number --pending

# step 9

1. Charge Amount, Charge Type name parameters
2. how to get total charges.

# 14/07/2020

1. Nominee details api.
2. new Document name there is no field for [ documentName ] . -- to be removed from ui

# 15/07/2020

1. step 2 product details card need to keep open.
2. step 10 charges needs an UI update.
3. step 5 In information section (ProductService.getSubProductCreditInterestBySubProductIdentification) 500 ERROR
4. step 9 get signatures by person method.

# 16/07/2020

1. step 2 no data for sub products.
   <!-- 2. need to clarify about taxPercentage of nominee -->
2.
