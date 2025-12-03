import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Pencil } from 'lucide-react';

interface EmergencyContactCardNewProps {
  contactName?: string;
  contactPhone?: string;
}

const EmergencyContactCardNew: React.FC<EmergencyContactCardNewProps> = ({
  contactName,
  contactPhone
}) => {
  const hasContact = contactName && contactPhone;

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Emergency Contact</h3>
        <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
          <Pencil className="w-3.5 h-3.5" />
        </Link>
      </div>
      {hasContact ? (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
            <Phone className="w-4 h-4 text-destructive" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{contactName}</p>
            <p className="text-xs text-muted-foreground">{contactPhone}</p>
          </div>
        </div>
      ) : (
        <div className="text-center py-2">
          <p className="text-xs text-muted-foreground mb-2">No emergency contact set</p>
          <Link 
            to="/profile"
            className="text-xs text-primary hover:underline"
          >
            Add contact →
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmergencyContactCardNew;
