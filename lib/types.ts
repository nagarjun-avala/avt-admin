// Enum definitions
enum RoleType {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST",
}

enum BarcodeType {
    UPC = "UPC",
    EAN = "EAN",
    ISBN = "ISBN",
}

enum InventoryTransactionType {
    IN = "IN",
    OUT = "OUT",
}

enum PaymentMethod {
    CREDIT_CARD = "CREDIT_CARD",
    DEBIT_CARD = "DEBIT_CARD",
    PAYPAL = "PAYPAL",
    BANK_TRANSFER = "BANK_TRANSFER",
    CASH = "CASH",
}

enum OrderStatus {
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED",
}

enum PaymentStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED",
}

enum ShippingStatus {
    PENDING = "PENDING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED",
}

enum AdjustmentType {
    INCREASE = "INCREASE",
    DECREASE = "DECREASE",
}

enum ReturnStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    COMPLETED = "COMPLETED",
}

// Interface definitions
export interface Role {
    id: string;
    code: string;
    label: string;
    short: string;
    description?: string | "";
    isActive: boolean;
    type: RoleType;
    priority: number;
    activatedAt?: string | "";
    canDelete: boolean;
    canUpdate: boolean;
    canCreateProduct: boolean;
    canViewReports: boolean;
    createdById?: string | "";
    updatedById?: string | "";
    createdAt: string;
    updatedAt: string;
}

export interface Admin {
    id: string;
    avatar?: string | "";
    username: string;
    password: string;
    fullname: string;
    email?: string | "";
    mobile?: string | "";
    roleId: string;
    role: Role;
    isActive: boolean;
    lastLoginAt?: string | "";
    theme: string;
    currency: string;
    createdByAdminId?: string | "";
    updatedByAdminId?: string | "";
    createdAt: string;
    updatedAt: string;
}

export interface Review {
    id: string;
    rating: number;
    comment?: string | "";
    userId: string;
    productId: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Product {
    id: string;
    barcodeId: string;
    name: string;
    description?: string | "";
    categoryId: string;
    price: number;
    stockQty: bigint;
    stockThreshold: number;
    averageRating: number;
    reviewCount: number;
    supplierId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Image {
    id: string;
    url: string;
    altText?: string | "";
    productId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description?: string | "";
    parentId?: string | "";
    level: number;
    displayOrder: number;
    isActive: boolean;
    createdBy?: string | "";
    updatedBy?: string | "";
    createdAt: string;
    updatedAt: string;
}

export interface Supplier {
    id: string;
    name: string;
    mobile: string;
    email?: string | "";
    website?: string | "";
    addressId?: string | "";
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Barcode {
    id: string;
    code: string;
    ean13?: string | "";
    type: BarcodeType;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    mobile?: string | "";
    createdAt: string;
    updatedAt: string;
}

export interface InventoryTransaction {
    id: string;
    productId: string;
    quantity: number;
    type: InventoryTransactionType;
    createdAt: string;
    updatedAt: string;
}

export interface Address {
    id: string;
    street: string;
    cityId: string;
    stateId: string;
    countryId: string;
    postalCode: string;
    createdAt: string;
    updatedAt: string;
}

export interface Country {
    id: string;
    name: string;
    iso3: string;
    iso2: string;
    phoneCode: string;
    capital: string;
    currency: string;
    currencySymbol: string;
    tld: string;
    native: string;
    region: string;
    subregion: string;
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
}

export interface State {
    id: string;
    name: string;
    countryId: string;
    countryCode: string;
    stateCode: string;
    latitude: string;
    longitude: string;
    createdAt: string;
    updatedAt: string;
}

export interface City {
    id: string;
    name: string;
    stateId: string;
    stateCode: string;
    countryId: string;
    countryCode: string;
    latitude: string;
    longitude: string;
    createdAt: string;
    updatedAt: string;
}

export interface Timezone {
    id: string;
    countryId: string;
    zoneName: string;
    gmtOffset: number;
    gmtOffsetName: string;
    abbreviation: string;
    tzName: string;
    createdAt: string;
    updatedAt: string;
}

export interface Translation {
    id: string;
    countryId: string;
    language: string;
    value: string;
    createdAt: string;
    updatedAt: string;
}

export interface PaymentTransaction {
    id: string;
    amount: number;
    paymentMethod: PaymentMethod;
    transactionId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Order {
    id: string;
    orderNumber: string;
    customerId: string;
    status: OrderStatus;
    paymentStatus: PaymentStatus;
    shippingStatus: ShippingStatus;
    totalAmount: number;
    createdAt: string;
    updatedAt: string;
}

export interface OrderProduct {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
    createdAt: string;
    updatedAt: string;
}

export interface InventoryAdjustment {
    id: string;
    productId: string;
    quantity: number;
    adjustmentType: AdjustmentType;
    reason?: string | "";
    createdBy: string;
    createdAt: string;
    updatedAt: string;
}

export interface SupplierOrder {
    id: string;
    orderNumber: string;
    supplierId: string;
    status: OrderStatus;
    totalAmount: number;
    createdAt: string;
    updatedAt: string;
}

export interface SupplierOrderProduct {
    id: string;
    supplierOrderId: string;
    productId: string;
    quantity: number;
    price: number;
    createdAt: string;
    updatedAt: string;
}

export interface Return {
    id: string;
    orderId: string;
    status: ReturnStatus;
    returnReason: string;
    totalRefund: number;
    createdAt: string;
    updatedAt: string;
}

export interface ReturnProduct {
    id: string;
    returnId: string;
    productId: string;
    quantity: number;
    createdAt: string;
    updatedAt: string;
}

export interface Discount {
    id: string;
    code: string;
    description?: string | "";
    amount: number;
    percentage: boolean;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
}

export interface Report {
    id: string;
    reportType: string;
    startDate: string;
    endDate: string;
    generatedAt: string;
    data: unknown;
    createdAt: string;
    updatedAt: string;
}

export interface AuditLog {
    id: string;
    entity: string;
    entityId: string;
    action: string;
    details?: string | "";
    adminId: string;
    ipAddress?: string | "";
    createdAt: string;
    updatedAt: string;
}
