export interface IBuffGoodsListResponse {
    code: string;
    data: {
        items: IBuffGoodsItem[];
        page_num: number;
        page_size: number;
        total_count: number;
        total_page: number;
    };
    msg: string;
}

export interface IBUffGoodsBillOrderResponse {
    code: string;
    msg: string;
    data: {
        has_market_stores: object,
        items: IBuffGoodsBillOrderItem[],
    };
}

export interface IBuffGoodsBillOrderItem {
    price: string;
}

export interface IBuffGoodsItem {
    id: number;
    name: string;
    market_hash_name: string;
    sell_min_price: string;
    sell_num: number;
    steam_market_url: string;
    game: string;
    goods_info: {
        icon_url: string;
        steam_price: string;
        steam_price_cny: string;
    };
}

export interface IGoods {
    id: number;
    name: string;
    sell_min_price: string;
    sell_num: number;
    steam_market_url: string;
    icon_url: string;
    steam_price: string;
    steam_price_cny: string;
    buff_goods_url: string;
}
