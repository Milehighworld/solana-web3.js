import { Address } from '@solana/addresses';
import { GraphQLResolveInfo } from 'graphql';

import { RpcGraphQLContext } from '../context';
import { AccountQueryArgs } from '../schema/account';

export const resolveAccount = (fieldName: string) => {
    return (
        parent: { [x: string]: Address },
        args: AccountQueryArgs,
        context: RpcGraphQLContext,
        info: GraphQLResolveInfo | undefined
    ) =>
        parent[fieldName] === null ? null : context.accountLoader.load({ ...args, address: parent[fieldName] }, info);
};