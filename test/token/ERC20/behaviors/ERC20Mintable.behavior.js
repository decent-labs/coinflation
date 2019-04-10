const { BN, constants, expectEvent } = require('openzeppelin-test-helpers');
const { ZERO_ADDRESS } = constants;

function shouldBehaveLikeERC20Mintable (minter, [anyone]) {
  describe('as a mintable token', function () {
    describe('mint', function () {
      context('when the sender has minting permission', function () {
        mintAmountsFrom(minter);
      });

      context('when the sender is anyone else lol', function () {
        mintAmountsFrom(anyone);
      });

      function mintAmountsFrom (from) {
        const amount = new BN(100);

        context('for a zero amount', function () {
          shouldMint(from, new BN(0));
        });

        context('for a non-zero amount', function () {
          shouldMint(from, amount);
        });
      }

      function shouldMint (from, amount) {
        beforeEach(async function () {
          ({ logs: this.logs } = await this.token.mint(anyone, amount, { from }));
        });

        it('mints the requested amount', async function () {
          (await this.token.balanceOf(anyone)).should.be.bignumber.equal(amount);
        });

        it('emits a mint and a transfer event', async function () {
          expectEvent.inLogs(this.logs, 'Transfer', {
            from: ZERO_ADDRESS,
            to: anyone,
            value: amount,
          });
        });
      }
    });
  });
}

module.exports = {
  shouldBehaveLikeERC20Mintable,
};
