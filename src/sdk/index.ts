import { CasaAccountService } from "./casa-account";
import { CasaChequebookManagementService } from "./casa-cheque-book-management";
import { CasaFundReservationService } from "./casa-fund-reservation";
import { CasaInterestScheduleService } from "./casa-interest-schedule";
import { CasaMasterControlService } from "./casa-master-control";
import { CasaProductBCAService } from "./casa-product-bca";
import { CasaScheduledPaymentsService } from "./casa-scheduled-payments";
import { CasaStandingOrderService } from "./casa-sto";
import { CasaTaxService } from "./casa-tax";
import { CasaTransactionService } from "./casa-transaction";
import { CasaTransferInService } from "./casa-transfer-in";
import { CasaTransferInOutService } from "./casa-transfer-in-out";
import { CasaTransferOutService } from "./casa-transfer-out";
import { CentralCashManagement } from "./central-cash-management";
import { ComnAlertManagementService } from "./comn-alert";
import { ComnBankService } from "./comn-bank";
import { ComnBranchService } from "./comn-branch";
import { ComnCommonService } from "./comn-common";
import { ComnCommonListService } from "./comn-common-list";
import { ComnCurrencyDetailService } from "./comn-currency-detail";
import { ComnCustomerService } from "./comn-customer";
import { ComnDocumentUploadService } from "./comn-document-upload";
import { ComnEmployeeService } from "./comn-employee";
import { ComnPersonService } from "./comn-person";
import { ComnSignatureService } from "./comn-signature";
import { ComnUserService } from "./comn-user";
import { ENV, EnvConfig } from "./config";
import { AuctionService } from "./yard-management/auction";
import { ColYardFeeChargeDetailsAssetTypeService } from "./yard-management/col-collateral";
import { CommonListItemService } from "./yard-management/common-list";
import { ComnCommnService } from "./yard-management/comn-commn/index";
import { comnYardfeechargeDetailsService } from "./yard-management/comn-common";
import { CommonSuppliesEntitiesAuctioneerService } from "./yard-management/comn-supplies-entities";
import { MarkAsSeizedService } from "./yard-management/mark-as-seized/seized-handover";
import { SalesMethodService } from "./yard-management/sales-method";
import { TenderDefinitionService } from "./yard-management/tender-definition";
import { ValuationConditionService } from './yard-management/valuation-condition';
import { YardCreationService } from "./yard-management/yard-creation";
import { YardFeeChargeDetailsService } from "./yard-management/yard-fee-charge-details";
import { YardFeeTypeService } from "./yard-management/yard-fee-type";
import { YardInCheckListItemsService } from "./yard-management/yard-in-check-list-items";
import { YardInConditionService } from "./yard-management/yard-in-conditions";
import { YardLevelService } from "./yard-management/yard-level";
import { YardReleaseTypeService } from "./yard-management/yard-release-type";



const autoBind = require("auto-bind");

export class LOLCSDK {
  AccountService: CasaAccountService;
  ChequeBookManagementService: CasaChequebookManagementService;
  FundReservationService: CasaFundReservationService;
  InterestScheduleService: CasaInterestScheduleService;
  MasterControlService: CasaMasterControlService;
  ProductBCAService: CasaProductBCAService;
  ScheduledPaymentService: CasaScheduledPaymentsService;
  StandingOrderService: CasaStandingOrderService;
  TaxService: CasaTaxService;
  TransactionService: CasaTransactionService;
  TransferInService: CasaTransferInService;
  TransactionInOutService: CasaTransferInOutService;
  TransferOutService: CasaTransferOutService;
  AlertService: ComnAlertManagementService;
  BankService: ComnBankService;
  BranchService: ComnBranchService;
  CommonService: ComnCommonService;
  CommonPersonService: ComnPersonService;
  CommonListService: ComnCommonListService;
  CurrencyDetailService: ComnCurrencyDetailService;
  CustomerService: ComnCustomerService;
  DocumentUploadService: ComnDocumentUploadService;
  EmployeeService: ComnEmployeeService;
  SignatureService: ComnSignatureService;
  CashManagement: CentralCashManagement;
  UserService: ComnUserService;
  YardLevelService: YardLevelService;

  YardCreationService: YardCreationService;
  ValuationConditionService: ValuationConditionService;

  ComnCommnService: ComnCommnService;
  TenderDefinitionService: TenderDefinitionService;
  CommonListItemService: CommonListItemService;
  YardInConditionService: YardInConditionService;
  AuctionService: AuctionService;
  YardReleaseTypeService: YardReleaseTypeService;
  YardInCheckListItemsService: YardInCheckListItemsService;
  CommonSuppliesEntitiesAuctioneerService: CommonSuppliesEntitiesAuctioneerService;

  YardFeeTypeService: YardFeeTypeService;
  ColYardFeeChargeDetailsAssetTypeService: ColYardFeeChargeDetailsAssetTypeService;
  SalesMethodService: SalesMethodService;
  YardFeeChargeDetailsService: YardFeeChargeDetailsService;
  comnYardfeechargeDetailsService: comnYardfeechargeDetailsService;
  MarkAsSeizedService: MarkAsSeizedService;
  constructor(private env: EnvConfig) {
    if (!this.env) {
      this.env = ENV;
    }

    this.AuctionService = new AuctionService(this.env);
    this.AccountService = new CasaAccountService(this.env);
    this.ChequeBookManagementService = new CasaChequebookManagementService(
      this.env
    );

    this.MarkAsSeizedService = new MarkAsSeizedService(this.env)
    this.CashManagement = new CentralCashManagement(this.env);
    this.FundReservationService = new CasaFundReservationService(this.env);
    this.InterestScheduleService = new CasaInterestScheduleService(this.env);
    this.MasterControlService = new CasaMasterControlService(this.env);
    this.ProductBCAService = new CasaProductBCAService(this.env);
    this.ScheduledPaymentService = new CasaScheduledPaymentsService(this.env);
    this.StandingOrderService = new CasaStandingOrderService(this.env);
    this.TaxService = new CasaTaxService(this.env);
    this.TransactionService = new CasaTransactionService(this.env);
    this.TransferInService = new CasaTransferInService(this.env);
    this.TransactionInOutService = new CasaTransferInOutService(this.env);
    this.TransferOutService = new CasaTransferOutService(this.env);
    this.AlertService = new ComnAlertManagementService(this.env);
    this.BankService = new ComnBankService(this.env);
    this.BranchService = new ComnBranchService(this.env);
    this.CommonService = new ComnCommonService(this.env);
    this.CommonPersonService = new ComnPersonService(this.env);
    this.CommonListService = new ComnCommonListService(this.env);
    this.CurrencyDetailService = new ComnCurrencyDetailService(this.env);
    this.CustomerService = new ComnCustomerService(this.env);
    this.DocumentUploadService = new ComnDocumentUploadService(this.env);
    this.EmployeeService = new ComnEmployeeService(this.env);
    this.SignatureService = new ComnSignatureService(this.env);
    this.UserService = new ComnUserService(this.env);
    this.YardLevelService = new YardLevelService(this.env);

    this.YardCreationService = new YardCreationService(this.env);
    this.ValuationConditionService = new ValuationConditionService(this.env);


    this.ComnCommnService = new ComnCommnService(this.env);
    this.TenderDefinitionService = new TenderDefinitionService(this.env);
    this.CommonListItemService = new CommonListItemService(this.env);
    this.YardInConditionService = new YardInConditionService(this.env);
    this.YardReleaseTypeService = new YardReleaseTypeService(this.env);
    this.YardInCheckListItemsService = new YardInCheckListItemsService(
      this.env
    );
    this.CommonSuppliesEntitiesAuctioneerService = new CommonSuppliesEntitiesAuctioneerService(
      this.env
    );

    this.YardFeeTypeService = new YardFeeTypeService(this.env);
    this.ColYardFeeChargeDetailsAssetTypeService = new ColYardFeeChargeDetailsAssetTypeService(this.env);
    this.SalesMethodService = new SalesMethodService(this.env);
    this.YardFeeChargeDetailsService = new YardFeeChargeDetailsService(this.env);
    this.comnYardfeechargeDetailsService = new comnYardfeechargeDetailsService(this.env);

    autoBind(this.CommonSuppliesEntitiesAuctioneerService);
    autoBind(this.YardInCheckListItemsService);
    autoBind(this.YardReleaseTypeService);
    autoBind(this.AuctionService);
    autoBind(this.YardInConditionService);
    autoBind(this.CommonListItemService);
    autoBind(this.ComnCommnService);
    autoBind(this.TenderDefinitionService);

    autoBind(this.MarkAsSeizedService)
    autoBind(this.YardLevelService);
    autoBind(this.AccountService);
    autoBind(this.ChequeBookManagementService);
    autoBind(this.FundReservationService);
    autoBind(this.InterestScheduleService);
    autoBind(this.MasterControlService);
    autoBind(this.ProductBCAService);
    autoBind(this.ScheduledPaymentService);
    autoBind(this.StandingOrderService);
    autoBind(this.TaxService);
    autoBind(this.TransactionService);
    autoBind(this.TransferInService);
    autoBind(this.TransactionInOutService);
    autoBind(this.TransferOutService);
    autoBind(this.AlertService);
    autoBind(this.BankService);
    autoBind(this.BranchService);
    autoBind(this.CommonService);
    autoBind(this.CommonListService);
    autoBind(this.CurrencyDetailService);
    autoBind(this.CustomerService);
    autoBind(this.DocumentUploadService);
    autoBind(this.EmployeeService);
    autoBind(this.SignatureService);
    autoBind(this.CashManagement);
    autoBind(this.UserService);
    autoBind(this.YardCreationService);
    autoBind(this.ValuationConditionService);
    autoBind(this.YardFeeTypeService);
    autoBind(this.ColYardFeeChargeDetailsAssetTypeService);
    autoBind(this.SalesMethodService);
    autoBind(this.YardFeeChargeDetailsService);
    autoBind(this.comnYardfeechargeDetailsService);
  }

  configure(env: EnvConfig) {
    Object.assign(this.env, env);
  }
}
