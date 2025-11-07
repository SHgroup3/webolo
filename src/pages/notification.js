import React from "react";
import { Check } from "lucide-react"; // or you can use react-icons if preferred

export default function Notification() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <main className="max-w-2xl w-full px-6 py-10">
        <section className="max-w-xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                Property Updates
              </h3>
            </div>
            <div className="relative min-h-[76px] bg-gray-50 border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
              <div>
                <div className="font-semibold text-gray-800">
                  No New Notifications
                </div>
                <div className="text-gray-500 text-sm">
                  You are all up to date with your notifications. Good job!
                </div>
              </div>

              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                <Check className="text-green-600 w-6 h-6" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
