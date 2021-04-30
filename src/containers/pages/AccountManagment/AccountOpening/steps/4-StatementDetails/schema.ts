export const AccountOpening_StatementDetailsSchema = {
  cards: [
    {
      title: "Statement Details",
      description: "These are the basic details of the account",
      noSend: true,
      // Todo: Need Clarification
      // Todo: Where are the rest of the fields?
      value: {
        api: "AccountService.getStatementTypes()"
      }
    }
  ]
};
