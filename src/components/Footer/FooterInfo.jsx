
export default function FooterInfo() {
    return (
        <div className="text-gray-400 text-sm flex flex-col justify-between h-full">
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3">We Accept</h3>
                <div className="flex gap-3 text-3xl">
                    {/* Using emoji placeholders, swap for icons if you want */}
                    <span title="Visa">💳</span>
                    <span title="MasterCard">💳</span>
                    <span title="PayPal">💰</span>
                    <span title="Apple Pay">🍎</span>
                </div>
            </div>
            <div className="mt-auto text-xs">
                © {new Date().getFullYear()} DemoShop. All rights reserved.
            </div>
        </div>
    );
}
